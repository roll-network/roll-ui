import { AbstractConnector } from "@web3-react/abstract-connector";
import { StyleProp, ViewStyle } from "react-native";
export declare type HandleWeb3Connect = (c: AbstractConnector) => void;
declare type Props = {
    buttonStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
    activity?: boolean;
};
export declare const ConnectWeb3Button: ({ buttonStyle, onPress, activity, }: Props) => JSX.Element;
export {};
