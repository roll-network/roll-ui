import { AbstractConnector } from "@web3-react/abstract-connector";
import { Body, Button, margins, useTheme } from "../..";
import { Activity } from "../../atoms/activity";
import { shortenAddress } from "../../utils/web3";
import { useEthAddress } from "../../hooks/web3";
import { StyleProp, ViewStyle } from "react-native";
import { Dropdown } from "../dropdown";
import { useState } from "react";
import { ReactComponent as Copy } from "../../assets/svg/copy.svg";
import { ReactComponent as WalletIcon } from "../../assets/svg/wallet.svg";
import { ReactComponent as LinkIcon } from "../../assets/svg/link.svg";
import { AccountDropdwn } from "./accountDropdown";
export type HandleWeb3Connect = (c: AbstractConnector) => void;

type Props = {
  buttonStyle?: StyleProp<ViewStyle>; // TODO define type properly
  onPress: () => void;
  activity?: boolean;
};

export const ConnectWeb3Button = ({
  buttonStyle,
  onPress,
  activity,
}: Props) => {
  const address = useEthAddress();
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  if (activity) {
    return (
      <div className="flex items-center h-full w-28 p-2">
        <Activity />
      </div>
    );
  }

  if (address) {
    return (
      <Dropdown
        open={open}
        renderDropdown={() => <AccountDropdwn address={address} />}
      >
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="flex h-8 self-center items-center bg-gray-200 p-2 rounded-lg"
        >
          <Body>{shortenAddress(address)}</Body>
        </div>
      </Dropdown>
    );
  }

  return (
    <Button
      style={buttonStyle}
      type="primary"
      title="Connect Wallet"
      onPress={onPress}
    />
  );
};
