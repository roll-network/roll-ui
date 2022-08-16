/// <reference types="react" />
import { ValueProps } from ".";
declare const storyConfig: {
    title: string;
    component: ({ displayValue, decimals, maxDigits, style, renderValue, }: ValueProps) => JSX.Element;
};
export declare const ZeroDecimal: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export declare const FourDecimal: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export declare const EightDecimal: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export declare const EightTeenDecimal: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export declare const TinyNum: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export declare const LargeNum: import("react").FunctionComponent<ValueProps> & {
    args: Partial<ValueProps>;
};
export default storyConfig;
