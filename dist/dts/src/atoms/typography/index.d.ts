import React from "react";
import { GestureResponderEvent, StyleProp, TextStyle } from "react-native";
export declare const truncateMaxChars: (str: string, maxlimit?: number) => string;
declare type TypographyProps = {
    children: any;
    style?: StyleProp<TextStyle>;
    weight?: "regular" | "bold";
    color?: string;
    numberOfLines?: number;
    onPress?: (event: GestureResponderEvent) => void;
    toolTipVal?: string;
    underline?: boolean;
};
export declare const TypographyBase: React.ForwardRefExoticComponent<TypographyProps & {
    fontSize: number;
} & React.RefAttributes<unknown>>;
export declare const SubCaption: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Caption: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Body: React.ForwardRefExoticComponent<TypographyProps & React.RefAttributes<unknown>>;
export declare const SubHeader: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Header: ({ ...props }: TypographyProps) => JSX.Element;
export declare const LargeHeader: ({ ...props }: TypographyProps) => JSX.Element;
export declare const Title: ({ ...props }: TypographyProps) => JSX.Element;
export declare const LargeTitle: ({ ...props }: TypographyProps) => JSX.Element;
export {};
