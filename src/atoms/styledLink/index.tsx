import { Body } from "..";
import { useTheme } from "../..";

type StyledLinkProps = {
  title: string;
  url: string;
  target?: string;
};

const StyledLink = ({ title, url, target = "_blank" }: StyledLinkProps) => {
  const theme = useTheme();

  return (
    <a href={url} target={target}>
      <Body color={theme.text.highlight}>{title}</Body>
    </a>
  );
};

export default StyledLink;
