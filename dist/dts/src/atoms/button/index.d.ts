/// <reference types="react" />
import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
export declare type Props = {
    style?: StyleProp<ViewStyle>;
    type: "primary" | "secondary" | "minimal" | "disabled";
    title?: string;
    onPress?: (e?: GestureResponderEvent) => void;
    isHovering?: boolean | undefined;
};
export declare const Button: React.FC<Props>;