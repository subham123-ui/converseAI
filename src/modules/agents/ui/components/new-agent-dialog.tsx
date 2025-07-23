import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewAgentDialog({ open, onOpenChange }: NewAgentDialogProps) {
  return (
    <ResponsiveDialog
      open={open}
      onOpenChangeAction={onOpenChange}
      title="Create Agent"
      description="Create a new agent to assist you with your tasks."
    >
        <AgentForm onSuccess={() => onOpenChange(false)} onCancel={() => onOpenChange(false)} />
    </ResponsiveDialog>
  );
}
