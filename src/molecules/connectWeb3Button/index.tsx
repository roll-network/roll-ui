import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { Web3Connectors } from "../../web3Connectors";
import { Button } from "../..";
import { Activity } from "../../atoms/activity";
import { shortenAddress } from "../../utils/web3";
import { useInactiveListener } from "../../hooks/web3";

export type HandleWeb3Connect = (c: AbstractConnector) => void;

type Props = {
  connectors: Web3Connectors;
  buttonStyle?: any; // TODO define type properly
  onConnect: (handleConnect: HandleWeb3Connect) => void;
};

export const ConnectWeb3Button = ({
  connectors,
  buttonStyle,
  onConnect,
}: Props) => {
  const { activate, connector, account } = useWeb3React<Web3Provider>();
  const [isActivating, setIsActivating] = useState(true);
  useInactiveListener(connectors);

  const handleConnect = (c: AbstractConnector) => {
    setIsActivating(true);
    activate(c);
  };

  const _onConnect = () => onConnect(handleConnect);

  useEffect(() => {
    if (isActivating && connector) {
      setIsActivating(false);
    }
  }, [connector, isActivating]);

  useEffect(() => {
    connectors.injected.isAuthorized().then((authorized: boolean) => {
      if (!authorized) {
        setIsActivating(false);
        return;
      }
      if (!isActivating) setIsActivating(true);
      activate(connectors.injected, undefined, true).finally(() =>
        setIsActivating(false)
      );
    });
  }, []);

  if (isActivating) {
    return (
      <div className="flex items-center h-full w-28 p-2">
        <Activity />
      </div>
    );
  }

  if (account) {
    return (
      <div
        className="flex h-8 self-center items-center bg-gray-200 p-2 rounded-lg"
        // style={{ alignSelf: "flex-start" }}
      >
        <p className="w-28 cursor-pointer">{shortenAddress(account)}</p>
      </div>
    );
  }

  return (
    <Button
      style={buttonStyle}
      type="primary"
      title="Connect Wallet"
      onPress={_onConnect}
    />
  );
};
