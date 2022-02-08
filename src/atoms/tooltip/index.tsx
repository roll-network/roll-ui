import MuiTooltip, {
  tooltipClasses,
  TooltipProps,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export type Props = {
  children: React.ReactElement;
  title: string | JSX.Element;
  open?: boolean;
  placement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
};

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export const ToolTip: React.FC<Props> = ({
  children,
  title,
  placement,
  open,
}) => {
  return (
    <LightTooltip open={open} placement={placement} title={title}>
      {children}
    </LightTooltip>
  );
};
