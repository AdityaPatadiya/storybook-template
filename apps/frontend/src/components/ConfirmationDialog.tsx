"use client";

import * as React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type ConfirmationDialogProps = {
  trigger?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  variant?: "default" | "destructive";
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  loading?: boolean;
};

function ConfirmationDialog({
  trigger,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "default",
  onConfirm,
  onCancel,
  open,
  onOpenChange,
  loading = false,
}: ConfirmationDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [pending, setPending] = React.useState(false);

  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  const isBusy = loading || pending;

  const handleOpenChange = (next: boolean) => {
    if (!isControlled) setInternalOpen(next);
    onOpenChange?.(next);
  };

  const handleConfirm = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!onConfirm) return;
    const result = onConfirm();
    if (result instanceof Promise) {
      // Keep dialog open until the async work resolves, then close manually.
      event.preventDefault();
      setPending(true);
      try {
        await result;
        handleOpenChange(false);
      } finally {
        setPending(false);
      }
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      {trigger != null && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description != null && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancel} disabled={isBusy}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            variant={variant === "destructive" ? "destructive" : "default"}
            onClick={handleConfirm}
            disabled={isBusy}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export { ConfirmationDialog };
export type { ConfirmationDialogProps };
