import React from "react";
import { text } from "../../styles";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
} from "react-native";

type Weights = {
  [key: string]: FontFamily;
  bold: FontFamily;
  regular: FontFamily;
};

type FontFamily = {
  fontFamily: string;
};

const weights: Weights = {
  bold: text.bold,
  regular: text.body,
};

type TypographyProps = {
  children: any;
  style?: StyleProp<TextStyle>;
  weight?: "regular" | "bold";
  color?: string;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
};

export const SubCaption = ({
  children,
  style,
  weight = "regular",
  onPress,
  color,
  numberOfLines,
}: TypographyProps) => (
  <Text
    numberOfLines={numberOfLines}
    testID="typographyBody"
    onPress={onPress}
    style={[text.subCaption, weights[weight], style, { color }]}
  >
    {children}
  </Text>
);

export const Caption = ({
  children,
  style,
  weight = "regular",
  onPress,
  color,
  numberOfLines,
}: TypographyProps) => (
  <Text
    numberOfLines={numberOfLines}
    testID="typographyBody"
    onPress={onPress}
    style={[text.caption, weights[weight], style, { color }]}
  >
    {children}
  </Text>
);

export const Body = ({
  children,
  style,
  weight = "regular",
  onPress,
  color,
  numberOfLines,
}: TypographyProps) => (
  <Text
    numberOfLines={numberOfLines}
    testID="typographyBody"
    onPress={onPress}
    style={[text.body, weights[weight], style, { color }]}
  >
    {children}
  </Text>
);

export const SubHeader = ({
  children,
  weight = "regular",
  style,
  color,
  onPress,
  numberOfLines,
}: TypographyProps) => (
  <Text
    numberOfLines={numberOfLines}
    onPress={onPress}
    testID="subheader"
    style={[text.body, text.h6, weights[weight], style, { color }]}
  >
    {children}
  </Text>
);

export const Header = ({
  children,
  weight = "regular",
  color,
  style,
  numberOfLines,
}: TypographyProps) => (
  <Text
    testID="header"
    numberOfLines={numberOfLines}
    style={[text.body, text.h5, weights[weight], { color }, style]}
  >
    {children}
  </Text>
);

export const LargeHeader = ({
  children,
  weight = "regular",
  color,
  style,
}: TypographyProps) => (
  <Text
    testID="header"
    style={[text.body, text.h4, weights[weight], { color }, style]}
  >
    {children}
  </Text>
);

export const Title = ({
  children,
  style,
  weight = "regular",
  color,
  onPress,
}: TypographyProps) => (
  <Text onPress={onPress} style={[text.h3, weights[weight], { color }, style]}>
    {children}
  </Text>
);

export const truncateMaxChars = (str: string, maxlimit = 100) => {
  return str && str.length > maxlimit
    ? `${str.substring(0, maxlimit - 3)}...`
    : str;
};
