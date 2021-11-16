import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { containers } from "../..";
import { Body } from "../typography";
import { StyleSheet } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  type: "primary" | "secondary" | "disabled";
  title?: string;
  onPress?: (e?: GestureResponderEvent) => void;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    maxWidth: 600,
    minWidth: 100,
    height: 48,
  },
});

export const Button: React.FC<Props> = ({
  title,
  children,
  onPress,
  style,
}) => {
  return (
    <LinearGradient
      style={[styles.container, containers.center, style]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      colors={["#004EFF", "#0085FF"]}
    >
      <TouchableOpacity onPress={onPress}>
        {title ? <Body>{title}</Body> : children}
      </TouchableOpacity>
    </LinearGradient>
  );
};
