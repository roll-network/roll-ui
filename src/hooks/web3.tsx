import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "web3-react-core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Web3Connectors } from "../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useWeb3ConnectorsCtx } from "../providers/web3Connectors";

const ethEventChainIDChanged = "chainIdChanged";
const ethEventChainChanged = "chainChanged";
const ethEventAccountsChange = "accountsChanged";

export const useInactiveListener = (
  connectors: Web3Connectors | null,
  onChangeChain?: () => void,
  onChangeAccount?: () => void
) => {
  const { error, activate } = useWeb3React();

  const handleReActivate = useCallback(
    (message: string, first: () => void) => {
      first();
      if (!connectors) return;
      activate(connectors.injected, undefined, true).catch((err) => {
        console.error(message, err);
      });
    },
    [activate, connectors]
  );

  const _onChangeChain = useCallback(() => {
    handleReActivate(
      "failed to re-activate after network changed",
      () => onChangeChain && onChangeChain
    );
  }, [handleReActivate, onChangeChain]);

  const _onChangeAccount = useCallback(
    (accounts: string[]) => {
      accounts.length > 0 &&
        handleReActivate(
          "failed to re-active after account changed",
          () => onChangeAccount && onChangeAccount()
        );
    },
    [handleReActivate, onChangeAccount]
  );

  useEffect(() => {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.on && !error) {
      ethereum.on(ethEventChainIDChanged, _onChangeChain);
      ethereum.on(ethEventChainChanged, _onChangeChain);
      ethereum.on(ethEventAccountsChange, _onChangeAccount);

      return () => {
        if (!ethereum || !ethereum.removeListener) return;
        ethereum.removeListener(ethEventChainIDChanged, _onChangeChain);
        ethereum.removeListener(ethEventChainChanged, _onChangeChain);
        ethereum.removeListener(ethEventAccountsChange, _onChangeAccount);
      };
    }
  }, [error, handleReActivate, _onChangeAccount, _onChangeChain]);
};

export const useLibrary = () => {
  const { library } = useWeb3React<Web3Provider>();
  return library;
};

export const useSigner = () => {
  const library = useLibrary();
  const signer = useMemo(
    () => (library ? library.getSigner() : undefined),
    [library]
  );
  return signer;
};

export const useEthAddress = () => {
  const { account } = useWeb3React<Web3Provider>();
  return account;
};

export const useConnectWeb3 = (
  initActivityState: boolean | undefined = false
): [boolean, (c: AbstractConnector) => void] => {
  const { activate, connector } = useWeb3React<Web3Provider>();
  const [isActivating, setIsActivating] = useState(initActivityState);

  useEffect(() => {
    if (isActivating && connector) {
      setIsActivating(false);
    }
  }, [connector, isActivating]);

  const handleConnect = useCallback(
    (c: AbstractConnector) => {
      setIsActivating(true);
      activate(c);
    },
    [activate, setIsActivating]
  );

  return [isActivating, handleConnect];
};

export const useEagerConnect = (): boolean => {
  const { activate } = useWeb3React<Web3Provider>();
  const { connectors } = useWeb3ConnectorsCtx();
  const [isActivating, setIsActivating] = useState(true);

  useEffect(() => {
    if (!connectors) return;
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

  return isActivating;
};
