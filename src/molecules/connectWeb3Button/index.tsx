import { AbstractConnector } from "@web3-react/abstract-connector";
import { Body, Button } from "../..";
import { Activity } from "../../atoms/activity";
import { shortenAddress } from "../../utils/web3";
import { useEthAddress } from "../../hooks/web3";
import { StyleProp, ViewStyle } from "react-native";
import { Dropdown } from "../dropdown";
import { useState } from "react";
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
  const [mouseInA, setMouseInA] = useState(false);
  const [mouseInB, setMouseInB] = useState(false);

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
        onMouseEnter={() => setMouseInB(true)}
        onMouseLeave={() => setMouseInB(false)}
        open={mouseInA || mouseInB}
        renderDropdown={() => (
          <AccountDropdwn
            // onMouseIn={() => setMouseInB(true)}
            // onMouseOut={() => setMouseInB(false)}
            onSwitchAccounts={() => {
              setMouseInB(false);
              onPress();
            }}
            address={address}
          />
        )}
      >
        <div
          onMouseEnter={() => setMouseInA(true)}
          onMouseLeave={() => setMouseInA(false)}
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
