"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Loader2, Database, Zap } from "lucide-react";

type WizardState = "choice" | "progress" | "error" | "success";

export function SetupWizard() {
  const router = useRouter();
  const [state, setState] = useState<WizardState>("choice");
  const [pgHost, setPgHost] = useState("localhost");
  const [pgPort, setPgPort] = useState("5432");
  const [pgUser, setPgUser] = useState("");
  const [pgPassword, setPgPassword] = useState("");
  const [pgDatabase, setPgDatabase] = useState("claude-manager");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const buildConnectionString = () => {
    const credentials = pgPassword ? `${pgUser}:${pgPassword}` : pgUser;
    return `postgresql://${credentials}@${pgHost}:${pgPort}/${pgDatabase}`;
  };

  const pgReady = pgHost && pgPort && pgUser && pgDatabase;

  const handleSetup = async (
    provider: "sqlite" | "postgresql",
    connStr?: string
  ) => {
    setState("progress");
    setErrorMessage("");

    try {
      const res = await fetch("/api/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          provider,
          connectionString: connStr,
        }),
      });

      const data = (await res.json()) as {
        success: boolean;
        error?: string;
        message?: string;
      };

      if (!data.success) {
        setErrorMessage(data.error ?? "Setup failed");
        setState("error");
        return;
      }

      setSuccessMessage(
        data.message ?? "Database setup complete! Redirecting..."
      );
      setState("success");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1500);
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setState("error");
    }
  };

  if (state === "progress") {
    return (
      <CenteredLayout>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 py-12">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
            <p className="text-muted-foreground">Setting up database...</p>
          </CardContent>
        </Card>
      </CenteredLayout>
    );
  }

  if (state === "error") {
    return (
      <CenteredLayout>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 py-12">
            <p className="text-center text-destructive">{errorMessage}</p>
            <Button variant="outline" onClick={() => setState("choice")}>
              Try Again
            </Button>
          </CardContent>
        </Card>
      </CenteredLayout>
    );
  }

  if (state === "success") {
    return (
      <CenteredLayout>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center gap-4 py-12">
            <p className="text-center text-green-500">{successMessage}</p>
          </CardContent>
        </Card>
      </CenteredLayout>
    );
  }

  return (
    <CenteredLayout>
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome to Claude + Codex Manager</h1>
          <p className="mt-2 text-muted-foreground">
            Choose a database to get started
          </p>
        </div>

        <div className="grid w-full max-w-2xl gap-4 sm:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Zap className="size-5 text-yellow-500" />
                <CardTitle>SQLite</CardTitle>
              </div>
              <CardDescription>
                Quick start with zero configuration. Data stored in a local
                file. Great for trying things out or single-user setups.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                className="w-full"
                onClick={() => handleSetup("sqlite")}
              >
                Set Up
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Database className="size-5 text-blue-500" />
                <CardTitle>PostgreSQL</CardTitle>
              </div>
              <CardDescription>
                Production-ready database. Requires a running PostgreSQL
                instance.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Host</label>
                  <Input
                    placeholder="localhost"
                    value={pgHost}
                    onChange={(e) => setPgHost(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Port</label>
                  <Input
                    placeholder="5432"
                    value={pgPort}
                    onChange={(e) => setPgPort(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Username</label>
                  <Input
                    placeholder="postgres"
                    value={pgUser}
                    onChange={(e) => setPgUser(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-muted-foreground">Password</label>
                  <Input
                    type="password"
                    placeholder="password"
                    value={pgPassword}
                    onChange={(e) => setPgPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">Database</label>
                <Input
                  placeholder="claude-manager"
                  value={pgDatabase}
                  onChange={(e) => setPgDatabase(e.target.value)}
                />
              </div>
              <Button
                className="w-full"
                variant="outline"
                disabled={!pgReady}
                onClick={() =>
                  handleSetup("postgresql", buildConnectionString())
                }
              >
                Connect
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </CenteredLayout>
  );
}

function CenteredLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      {children}
    </div>
  );
}
