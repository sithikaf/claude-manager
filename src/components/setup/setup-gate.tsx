"use client";

import { useEffect, useState } from "react";
import { SetupWizard } from "./setup-wizard";
import { Loader2 } from "lucide-react";

export function SetupGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<
    "loading" | "needs-setup" | "ready"
  >("loading");

  useEffect(() => {
    fetch("/api/setup/status")
      .then((res) => res.json())
      .then((data: { needsSetup: boolean }) => {
        setStatus(data.needsSetup ? "needs-setup" : "ready");
      })
      .catch(() => {
        setStatus("needs-setup");
      });
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (status === "needs-setup") {
    return <SetupWizard />;
  }

  return <>{children}</>;
}
