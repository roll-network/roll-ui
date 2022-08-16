/// <reference types="react" />
import { TooltipComponentProps } from ".";
declare const storyConfig: {
    title: string;
    component: import("react").FC<TooltipComponentProps>;
};
export declare const Default: import("react").FunctionComponent<TooltipComponentProps> & {
    args: Partial<TooltipComponentProps>;
};
export declare const Membership: import("react").FunctionComponent<TooltipComponentProps> & {
    args: Partial<TooltipComponentProps>;
};
export default storyConfig;
