import { ImageStyle, StyleProp } from "react-native";
declare type Props = {
    size?: number;
    style?: StyleProp<ImageStyle>;
    uri?: string;
    color?: Array<string>;
};
export declare const DEFAULT_CIRCLE_IMG_SIZE = 48;
export declare const CircleImg: ({ size, style, uri, color }: Props) => JSX.Element;
export {};
