import { useTheme } from "../..";

type Props = {
  open: boolean;
  setOpen?: (open: boolean) => void;
  renderDropdown: () => React.ReactElement;
};

export const Dropdown: React.FC<Props> = ({
  children,
  open,
  setOpen,
  renderDropdown,
}) => {
  const theme = useTheme();
  return (
    <div className="relative">
      <div>{children}</div>
      {open && (
        <div
          className="absolute w-full rounded-lg shadow-xl"
          style={{ backgroundColor: theme.backgroundModal, zIndex: 1000 }}
        >
          {renderDropdown()}
        </div>
      )}
    </div>
  );
};
