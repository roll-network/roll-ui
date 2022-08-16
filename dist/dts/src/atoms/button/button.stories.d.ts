/// <reference types="react" />
import { ButtonProps } from ".";
declare const storyConfig: {
    title: string;
    component: import("react").FC<ButtonProps>;
};
export declare const Primary: import("react").FunctionComponent<ButtonProps> & {
    args: Partial<ButtonProps>;
};
export declare const Secondary: import("react").FunctionComponent<ButtonProps> & {
    args: Partial<ButtonProps>;
};
export declare const Disabled: import("react").FunctionComponent<ButtonProps> & {
    args: Partial<ButtonProps>;
};
export declare const Minimal: import("react").FunctionComponent<ButtonProps> & {
    args: Partial<ButtonProps>;
};
export default storyConfig;
