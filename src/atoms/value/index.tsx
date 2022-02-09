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
  renderValue?: (displayVal: string) => React.ReactElement;
};

export const Value = ({
  displayValue,
  decimals,
  maxDigits = DEFAULT_MAX_DIGITS,
  style,
  renderValue,
}: Props) => {
  return (
    <ToolTip placement="top" title={commafy(displayValue, decimals)}>
      <span>
        {renderValue ? (
          renderValue(commafy(displayValue, maxDigits))
        ) : (
          <Body style={style}>{commafy(displayValue, maxDigits)}</Body>
        )}
      </span>
    </ToolTip>
  );
};
