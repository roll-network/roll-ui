import { StyleProp, TextStyle } from "react-native";
import { Body } from "..";
import { commafy } from "../..";
import { ToolTip } from "../tooltip";

export const DEFAULT_MAX_DIGITS = 4;

type Props = {
  displayValue: string;
  decimals: number;
  maxDigits?: number;
  style?: StyleProp<TextStyle>;
};

export const Value = ({
  displayValue,
  decimals,
  maxDigits = DEFAULT_MAX_DIGITS,
  style,
}: Props) => {
  return (
    <ToolTip placement="top" title={commafy(displayValue, decimals)}>
      <span>
        <Body style={style}>{commafy(displayValue, maxDigits)}</Body>
      </span>
    </ToolTip>
  );
};
