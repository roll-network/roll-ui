import { useRef } from "react";
import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";
import { ReactComponent as DefaultIcon } from "../../assets/svg/default.svg";

type Props = {
  size?: number;
  style?: StyleProp<ImageStyle>;
  uri?: string;
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
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
          styles.container,
          { height: imgSize.current, width: imgSize.current },
          style,
        ]}
      />
    );
  return <DefaultIcon height={imgSize.current} width={imgSize.current} />;
};
