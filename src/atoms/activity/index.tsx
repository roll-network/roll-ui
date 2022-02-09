import { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "../..";

type Props = {
  // style?: React.CSSProperties;
  size?: "small" | "large" | number;
  style?: StyleProp<ViewStyle>;
};

// };

export const Activity = ({ style, size }: Props) => {
  const theme = useTheme();
  return (
    <ActivityIndicator color={theme.highlight} size={size} style={style} />
  );
  // return (
  //   <Spinner
  //     style={
  //       style
  //         ? { color: theme.highlight, ...style }
  //         : { color: theme.highlight }
  //     }
  //   />
  // );
};
