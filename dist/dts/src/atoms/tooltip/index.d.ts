/// <reference types="react" />
export declare type TooltipComponentProps = {
    children: React.ReactElement;
    title: string | JSX.Element;
    open?: boolean;
    isMembership?: boolean;
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
};
export declare const ToolTip: React.FC<TooltipComponentProps>;
