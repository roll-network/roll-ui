import { View } from "react-native";
import { containers, padding } from "../../styles";
import { Body } from "../typography";

export const Tag = ({ title, color }: { title: string; color: string }) => {
  return (
    <View
      style={[
        containers.borderRadius,
        padding.p8,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Body>{title}</Body>
    </View>
  );
};
