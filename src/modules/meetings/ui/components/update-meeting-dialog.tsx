import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingGetOne } from "../../types";
import { MeetingForm } from "./meeting-form";


interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initalValues: MeetingGetOne
}

export function UpdateMeetingDialog({
  open,
  onOpenChange,
  initalValues,
}: UpdateMeetingDialogProps) {
  
  return (
    <ResponsiveDialog
      open={open}
      onOpenChangeAction={onOpenChange}
      title="Edit Meeting"
      description="Update the details of your meeting."
    >
      <MeetingForm
        initialValues={initalValues}
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
}
