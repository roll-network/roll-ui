import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
  onBlur?: () => void;
  onFocus?: () => void;
  capitalize?: boolean;
  value: string;
  label?: string;
  placeholder?: string;
  onChangeText: (val: string) => void;
  style?: StyleProp<TextStyle>;
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
}: Props) => {
  return (
    <TextInput
      onFocus={onFocus}
      onBlur={onBlur}
      autoCapitalize={capitalize ? "characters" : undefined}
      label={label}
      style={style}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};
