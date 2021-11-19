import { StyleProp, TextStyle } from "react-native";
import { TextInput } from "react-native-paper";

type Props = {
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
}: Props) => {
  return (
    <TextInput
      label={label}
      style={style}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};
