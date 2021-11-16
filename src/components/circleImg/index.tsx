import { useRef } from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

type Props = {
  size?: number;
  style?: StyleProp<ImageStyle>;
  uri?: string;
  source?: ImageSourcePropType;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: "grey",
  },
});

export const CircleImg = ({ size, style, uri, source }: Props) => {
  const imgSize = useRef(size || 48);
  return (
    <Image
      source={source ? source : { uri }}
      style={[
        styles.container,
        { height: imgSize.current, width: imgSize.current },
        style,
      ]}
    />
  );
};
