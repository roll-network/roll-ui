import { AbstractConnector } from "@web3-react/abstract-connector";
import { Body, Button } from "../..";
import { Activity } from "../../atoms/activity";
import { shortenAddress } from "../../utils/web3";
import { useEthAddress } from "../../hooks/web3";
import { StyleProp, ViewStyle } from "react-native";

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

  if (activity) {
    return (
      <div className="flex items-center h-full w-28 p-2">
        <Activity />
      </div>
    );
  }

  if (address) {
    return (
      <div className="flex h-8 self-center items-center bg-gray-200 p-2 rounded-lg">
        <Body>{shortenAddress(address)}</Body>
      </div>
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
