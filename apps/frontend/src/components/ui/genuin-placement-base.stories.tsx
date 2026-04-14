import type { Meta, StoryObj } from "@storybook/react";

import { GenuinPlacement } from "@/components/ui/genuin-placement";

/**
 * React wrapper around the Genuin SDK. Drop one of these wherever you want
 * a placement slot; the component injects the SDK script tag on first mount
 * and calls `window.genuin.init(...)` with the ids you supply.
 *
 * There are two ways to configure a placement:
 *   - `styleId` + `placementId` — the standard pair.
 *   - `embedId` — a single bundled id.
 *
 * `apiKey` is always required.
 */
const meta: Meta<typeof GenuinPlacement> = {
  title: "ui/base/GenuinPlacement",
  component: GenuinPlacement,
  tags: ["autodocs"],
  argTypes: {
    styleId: { control: "text" },
    placementId: { control: "text" },
    embedId: { control: "text" },
    apiKey: { control: "text" },
    scriptSrc: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    initialVideoIds: { control: "object" },
  },
  args: {
    styleId: "699d6af290cd354baa3b046a",
    placementId: "699d6af290cd354baa3b0469",
    apiKey: "e0c7340483c56098b00809c1d25df30e6d2a4c50351102a6",
    scriptSrc: "/dist/gen_sdk.js",
    width: 600,
    height: 600,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GenuinPlacement>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The standard configuration. Pass `styleId`, `placementId`, and `apiKey`
 * and the placement renders itself once the SDK script has loaded.
 */
export const Default: Story = {};

/**
 * Same placement with a preloaded pair of video ids. The list is rendered
 * onto the host div as `data-initial-video-ids`, which is what the Genuin
 * SDK reads at init time.
 */
export const WithInitialVideos: Story = {
  args: {
    initialVideoIds: [
      "e2d38f51-e94d-42c5-a96a-716ebdd3668c",
      "fb30d971-7c36-459e-98aa-cde08d4b1fdf",
    ],
  },
};

/**
 * Compact, card-friendly size. Use this inside listing cards, sidebars, or
 * rails where the full 600x600 slot would be too big.
 */
export const CompactCard: Story = {
  args: {
    width: 320,
    height: 320,
  },
};

/**
 * The `embedId` shortcut. Use this when you have a single id that already
 * bundles the style + placement, instead of passing them separately.
 */
export const WithEmbedId: Story = {
  args: {
    styleId: undefined,
    placementId: undefined,
    embedId: "69943bc7376102622ed33151",
  },
};

/**
 * Missing `apiKey` — the component renders an inline error rather than
 * silently no-oping. Good for catching misconfiguration in dev.
 */
export const MissingApiKey: Story = {
  args: {
    apiKey: "",
  },
};
