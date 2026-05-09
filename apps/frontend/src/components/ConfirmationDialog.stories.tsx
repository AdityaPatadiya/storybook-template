import type { Meta, StoryObj } from "@storybook/react";
import { fn, userEvent, within } from "@storybook/test";
import * as React from "react";

import { ConfirmationDialog } from "./ConfirmationDialog";
import { Button } from "./ui/button";

/**
 * A confirmation dialog built on top of the AlertDialog primitive. Use it to
 * ask the user to confirm a discrete action (saving, deleting, submitting).
 */
const meta: Meta<typeof ConfirmationDialog> = {
  title: "Components/ConfirmationDialog",
  component: ConfirmationDialog,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    title: "Are you sure?",
    description: "This action cannot be undone.",
    trigger: "Open",
    onConfirm: fn(),
    onCancel: fn(),
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Default: Story = {};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Delete account?",
    description:
      "This will permanently delete your account and remove your data from our servers.",
    confirmLabel: "Delete",
    trigger: "Delete account",
  },
};

export const CustomLabels: Story = {
  args: {
    title: "Save changes?",
    description: "Your edits will be applied to the current document.",
    confirmLabel: "Save",
    cancelLabel: "Discard",
    trigger: "Save",
  },
};

export const AsyncConfirm: Story = {
  args: {
    title: "Submit form?",
    description:
      "We'll process your request — the dialog stays open until it finishes.",
    confirmLabel: "Submit",
    trigger: "Submit",
    onConfirm: () => new Promise((resolve) => setTimeout(resolve, 1500)),
  },
};

export const Controlled: Story = {
  render: function Render(args) {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open externally</Button>
        <ConfirmationDialog
          {...args}
          open={open}
          onOpenChange={setOpen}
          trigger={undefined}
        />
      </>
    );
  },
};

export const ShouldOpenAndConfirm: Story = {
  name: "when confirm is pressed, fires onConfirm and closes",
  tags: ["!dev", "!autodocs"],
  args: {
    onConfirm: fn(),
  },
  play: async ({ canvasElement, canvas, step }) => {
    const body = within(canvasElement.ownerDocument.body);

    await step("open the dialog", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /open/i }));
    });

    await step("press confirm", async () => {
      await userEvent.click(
        await body.findByRole("button", { name: /confirm/i }),
        { delay: 100 },
      );
    });
  },
};

export const ShouldOpenAndCancel: Story = {
  name: "when cancel is pressed, fires onCancel and closes",
  tags: ["!dev", "!autodocs"],
  args: {
    onCancel: fn(),
  },
  play: async ({ canvasElement, canvas, step }) => {
    const body = within(canvasElement.ownerDocument.body);

    await step("open the dialog", async () => {
      await userEvent.click(canvas.getByRole("button", { name: /open/i }));
    });

    await step("press cancel", async () => {
      await userEvent.click(
        await body.findByRole("button", { name: /cancel/i }),
        { delay: 100 },
      );
    });
  },
};
