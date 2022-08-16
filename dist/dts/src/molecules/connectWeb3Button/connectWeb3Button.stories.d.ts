declare const conf: {
    title: string;
    component: ({ buttonStyle, onPress, activity, }: {
        buttonStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        onPress: () => void;
        activity?: boolean | undefined;
    }) => JSX.Element;
};
export declare const Default: () => JSX.Element;
export default conf;
