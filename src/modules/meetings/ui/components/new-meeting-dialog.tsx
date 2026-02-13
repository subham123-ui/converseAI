import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";


interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewMeetingDialog({
  open,
  onOpenChange,
}: NewMeetingDialogProps) {
  const router = useRouter();
  return (
    <ResponsiveDialog
      open={open}
      onOpenChangeAction={onOpenChange}
      title="New Meeting"
      description="Create a new meeting to assist you with your tasks."
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`/meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
}
