/// <reference types="react" />
declare const storyConfig: {
    title: string;
    component: import("react").FC<{
        open: boolean;
        onMouseEnter?: (() => void) | undefined;
        onMouseLeave?: (() => void) | undefined;
        renderDropdown: () => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        alignLeft?: boolean | undefined;
    }>;
};
export declare const Default: () => JSX.Element;
export default storyConfig;
