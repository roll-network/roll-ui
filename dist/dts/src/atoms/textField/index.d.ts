import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { RenderProps } from "react-native-paper/lib/typescript/components/TextInput/types";
declare type Props = {
    disabled?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    capitalize?: boolean;
    value: string;
    label?: string;
    placeholder?: string;
    onChangeText: (val: string) => void;
    style?: StyleProp<TextStyle>;
    render?: ((props: RenderProps) => ReactNode) | undefined;
};
export declare const TextField: ({ value, onChangeText, label, placeholder, style, capitalize, onBlur, onFocus, render, disabled, }: Props) => JSX.Element;
export {};
