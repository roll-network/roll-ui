import React, { createContext } from "react";

export type ModalOpts = {
  style?: React.CSSProperties;
};

export type ModalRenderer = () => React.ReactElement | null;

export type ModalContext = {
  open: boolean;
  setOpen: (open: boolean) => void;
  renderer: ModalRenderer;
  opts: ModalOpts;
  setRenderer: (renderer: ModalRenderer, opts?: ModalOpts) => void;
};

export const ModalCtx = createContext<ModalContext>({
  open: false,
  opts: {},
  setOpen: () => null,
  renderer: () => null,
  setRenderer: () => null
});
