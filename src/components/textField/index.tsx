import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";
import { RenderProps } from "react-native-paper/lib/typescript/components/TextInput/types";

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
  render
}: Props) => {
  return (
    <TextInput
    {...{
      render,
      onFocus,
      onBlur,
      autoCapitalize: capitalize ? "characters" : undefined,
      label,
      style,
      value,
      onChangeText,
      placeholder
    }}
    />
  );
};
