import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";
import { RenderProps } from "react-native-paper/lib/typescript/components/TextInput/types";
import { useTheme } from "../..";

type Props = {
  onBlur?: () => void;
  onFocus?: () => void;
  capitalize?: boolean;
  value: string;
  label?: string;
  placeholder?: string;
  onChangeText: (val: string) => void;
  style?: StyleProp<TextStyle>;
  render?: ((props: RenderProps) => ReactNode) | undefined;
};

export const TextField = ({
  value,
  onChangeText,
  label,
  placeholder,
  style,
  capitalize,
  onBlur,
  onFocus,
  render,
}: Props) => {
  const theme = useTheme();
  return (
    <TextInput
      {...{
        render,
        onFocus,
        onBlur,
        autoCapitalize: capitalize ? "characters" : undefined,
        label,
        style: [{ backgroundColor: "transparent" }, style],
        value,
        onChangeText,
        placeholder,
        activeOutlineColor: theme.highlight,
        activeUnderlineColor: theme.highlight,
      }}
    />
  );
};
