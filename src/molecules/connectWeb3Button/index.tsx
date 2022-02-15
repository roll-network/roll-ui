import { useWeb3React } from "web3-react-core";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3Connectors } from "../../web3Connectors";
import { Body, Button } from "../..";
import { Activity } from "../../atoms/activity";
import { shortenAddress } from "../../utils/web3";
import {
  useConnectWeb3,
  useEagerConnect,
  useEthAddress,
} from "../../hooks/web3";

export type HandleWeb3Connect = (c: AbstractConnector) => void;

type Props = {
  connectors: Web3Connectors;
  buttonStyle?: any; // TODO define type properly
  onConnect: (handleConnect: HandleWeb3Connect) => void;
};

export const ConnectWeb3Button = ({ buttonStyle, onConnect }: Props) => {
  const [isActivating, handleConnect] = useConnectWeb3();
  const isEagerConnecting = useEagerConnect();
  const activity = isActivating || isEagerConnecting;
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
      onPress={() => onConnect(handleConnect)}
    />
  );
};
