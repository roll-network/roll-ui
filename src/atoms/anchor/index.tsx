import { TypographyBase, TypographyBaseProps } from "..";
import { useTheme, FONT_SIZE_BODY } from "../..";

type AnchorProps = {
  children: string;
  href: string;
  target?: string;
};

export const Anchor = ({
  children,
  href,
  fontSize = FONT_SIZE_BODY,
  target = "_blank",
}: AnchorProps & Partial<Pick<TypographyBaseProps, "fontSize">>) => {
  const theme = useTheme();

  return (
    <a href={href} target={target}>
      <TypographyBase color={theme.text.highlight} fontSize={fontSize}>
        {children}
      </TypographyBase>
    </a>
  );
};
