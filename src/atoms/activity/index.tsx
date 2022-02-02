import { Spinner } from "react-activity";
import { useTheme } from "../..";

type Props = {
  style?: React.CSSProperties;
};

export const Activity = ({ style }: Props) => {
  const theme = useTheme();
  return (
    <Spinner
      style={
        style
          ? { color: theme.highlight, ...style }
          : { color: theme.highlight }
      }
    />
  );
};
