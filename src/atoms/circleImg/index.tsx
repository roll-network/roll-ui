import { useRef } from "react";
import { Image, ImageStyle, StyleProp, StyleSheet, View } from "react-native";
import { ReactComponent as DefaultIcon } from "../../assets/svg/default.svg";

type Props = {
  size?: number;
  style?: StyleProp<ImageStyle>;
  uri?: string;
};

const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 100,
  },
  bg: {
    backgroundColor: "grey",
  },
});

export const DEFAULT_CIRCLE_IMG_SIZE = 48;

export const CircleImg = ({ size, style, uri }: Props) => {
  const imgSize = useRef(size || DEFAULT_CIRCLE_IMG_SIZE);
  if (uri)
    return (
      <Image
        source={{ uri }}
        style={[
          styles.borderRadius,
          styles.bg,
          { height: imgSize.current, width: imgSize.current },
          style,
        ]}
      />
    );
  return (
    <View style={[styles.borderRadius, style]}>
      <DefaultIcon height={imgSize.current} width={imgSize.current} />
    </View>
  );
};
