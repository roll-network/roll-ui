import { useTheme } from "../..";

type Props = {
  open: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  renderDropdown: () => React.ReactElement;
};

export const Dropdown: React.FC<Props> = ({
  children,
  open,
  renderDropdown,
  onMouseEnter,
  onMouseLeave,
}) => {
  const theme = useTheme();
  return (
    <div className="relative">
      <div>{children}</div>
      {open && (
        <div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="absolute rounded-lg shadow-xl"
          style={{ backgroundColor: theme.backgroundModal, zIndex: 1000 }}
        >
          {renderDropdown()}
        </div>
      )}
    </div>
  );
};
