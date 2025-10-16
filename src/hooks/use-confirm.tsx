import { JSX, useState } from "react";

import { Button } from "@/components/ui/button";
import { ResponsiveDialog } from "@/components/responsive-dialog";

export const useConfirm = (
  title: string,
  description: string
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState<{
    resolve: (value: unknown) => void;
  } | null>(null);

  const confirm = () => {
    return new Promise<unknown>((resolve) => {
      setPromise({ resolve });
    });
  };

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <ResponsiveDialog
      open={promise !== null}
      onOpenChangeAction={handleClose}
      title={title}
      description={description}
    >
      <div className="flex  pt-4 w-full  flex-col-reverse gap-y-2 lg-flex-row gap-x-2 items-center justify-end">
        <Button 
        onClick={handleConfirm}
        className="w-full lg:w-auto"
        >
          Confirm
        </Button>
        <Button 
        onClick={handleCancel}
        variant="outline"
        className="w-full lg:w-auto"
        
        >
          Cancel
        </Button>
      </div>
    </ResponsiveDialog>
  );

  return [ConfirmationDialog, confirm];
};
