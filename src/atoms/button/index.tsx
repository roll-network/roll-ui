import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { containers, padding } from "../..";
import { Body } from "../typography";
import { StyleSheet } from "react-native";
import { typeContainerStyles, typeTextStyles } from "./styles";

type Props = {
  style?: StyleProp<ViewStyle>;
  type: "primary" | "secondary" | "minimal" | "disabled";
  title?: string;
  onPress?: (e?: GestureResponderEvent) => void;
  isHovering?: boolean | undefined;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    maxWidth: 600,
    minWidth: 100,
    height: 48,
  },
});

const getHoverStyle = (type: string) => {
  return {
    container: {
      ...(typeContainerStyles as any)[type],
      ...(typeContainerStyles as any)[`${type}_hover`],
    },
    text: {
      ...(typeTextStyles as any)[type],
      ...(typeTextStyles as any)[`${type}_hover`],
    },
  };
};

const getBaselineStyle = (type: string) => {
  return {
    container: {
      ...(typeContainerStyles as any)[type],
    },
    text: {
      ...(typeTextStyles as any)[type],
    },
  };
};

// will default to primary style if incorrect type is given
const getStyles = (type: string, isHovering: boolean) =>
  isHovering ? getHoverStyle(type) : getBaselineStyle(type);

export const Button: React.FC<Props> = ({
  title,
  children,
  onPress,
  style,
  type,
  isHovering = false,
}) => {
  const typeStyle = getStyles(type, isHovering);
  return (
    <LinearGradient
      style={[styles.container, typeStyle.container, style]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 1 }}
      colors={typeStyle.container.gradientColors}
    >
      <TouchableOpacity
        style={[containers.fullHeight, padding.ph24, containers.fullWidth, containers.center]}
        onPress={onPress}
        disabled={type === "disabled"}
      >
        {title ? (
          <Body
            weight="bold"
            style={typeStyle.text}
            color={typeStyle.text.color}
          >
            {title}
          </Body>
        ) : (
          children
        )}
      </TouchableOpacity>
    </LinearGradient>
  );
};
