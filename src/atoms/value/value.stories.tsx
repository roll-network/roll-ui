import { Value } from ".";
import { titleBuilder } from "../../../.storybook/utils";

const storyConfig = {
  title: titleBuilder.atoms("Value"),
  component: Value,
};

export const ZeroDecimal = () => <Value displayValue="100" decimals={0} />;

export const FourDecimal = () => <Value displayValue="100.1234" decimals={4} />;

export const EightDecimal = () => (
  <Value displayValue="100.12345678" decimals={8} />
);

export const EightTeenDecimal = () => (
  <Value displayValue="100.123456789123456789" decimals={18} />
);

export const TinyNum = () => (
  <Value displayValue="0.000000000000000008" decimals={18} />
);

export const LargeNum = () => (
  <Value displayValue="99999999.999999999999999" decimals={18} />
);

export default storyConfig;
