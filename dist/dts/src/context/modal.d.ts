import React from "react";
export declare type ModalOpts = {
    style?: React.CSSProperties;
};
export declare type ModalRenderer = () => React.ReactElement | null;
export declare type ModalContext = {
    open: boolean;
    setOpen: (open: boolean) => void;
    renderer: ModalRenderer;
    opts: ModalOpts;
    setRenderer: (renderer: ModalRenderer, opts?: ModalOpts) => void;
};
export declare const ModalCtx: React.Context<ModalContext>;
