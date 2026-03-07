"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";

interface Account {
  id: string;
  name: string;
  dirPath: string;
}

interface Project {
  id: string;
  name: string;
  dirPath: string;
}

interface AccountSelectorProps {
  accounts: Account[];
  projects?: Project[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  showProjects?: boolean;
}

export function AccountSelector({ accounts, projects, value, onChange, label, showProjects }: AccountSelectorProps) {
  return (
    <div className="space-y-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select target..." />
        </SelectTrigger>
        <SelectContent>
          {accounts.map((acc) => (
            <SelectItem key={acc.dirPath} value={acc.dirPath}>
              {acc.name}
            </SelectItem>
          ))}
          {showProjects && projects?.map((proj) => (
            <SelectItem key={proj.dirPath} value={proj.dirPath}>
              {proj.name} (project)
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
