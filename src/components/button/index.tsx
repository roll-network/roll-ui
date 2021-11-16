import { GestureResponderEvent, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { containers } from "../..";
import { Body } from "../typography";

type Props = {
  type: "primary" | "secondary" | "disabled";
  title?: string;
  onPress?: (e?: GestureResponderEvent) => void;
};
export const Button: React.FC<Props> = ({ title, children, onPress }) => {
  return (
    <LinearGradient
      style={[
        { borderRadius: 50, maxWidth: 200, height: 48 },
        containers.center,
      ]}
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
