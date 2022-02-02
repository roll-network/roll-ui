import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect } from "react";
import { Web3Connectors } from "../web3Connectors";

const ethEventChainIDChanged = "chainIdChanged";
const ethEventChainChanged = "chainChanged";
const ethEventAccountsChange = "accountsChanged";

// TODO need to come up with strategy for shared state management
// avoid making assumptions about what state management frameworks are being used
// maybe callbacks?
export const useInactiveListener = (connectors: Web3Connectors) => {
  const { error, activate } = useWeb3React();
  //   const { dispatch } = useBalanceCtx();
  //   const globalDispatch = useGlobalDispatch();

  // placeholders
  const dispatch = () => null;
  const globalDispatch = () => null;

  const handleReActivate = useCallback(
    (message: string, first: () => void) => {
      first();
      activate(connectors.injected, undefined, true).catch((err) => {
        console.error(message, err);
      });
    },
    [activate]
  );

  const onChangeChain = useCallback(() => {
    // handleReActivate("failed to re-activate after network changed", () =>
    //   globalDispatch(actionClearState())
    // );
  }, [handleReActivate, globalDispatch]);

  const onChangeAccount = useCallback(
    (accounts: string[]) => {
      //   accounts.length > 0 &&
      // handleReActivate("failed to re-active after account changed", () =>
      //   dispatch(actionClearBalances())
      // );
    },
    [handleReActivate, dispatch]
  );

  useEffect(() => {
    // @ts-ignore
    const { ethereum } = window;

    if (ethereum && ethereum.on && !error) {
      ethereum.on(ethEventChainIDChanged, onChangeChain);
      ethereum.on(ethEventChainChanged, onChangeChain);
      ethereum.on(ethEventAccountsChange, onChangeAccount);

      return () => {
        if (!ethereum || !ethereum.removeListener) return;
        ethereum.removeListener(ethEventChainIDChanged, onChangeChain);
        ethereum.removeListener(ethEventChainChanged, onChangeChain);
        ethereum.removeListener(ethEventAccountsChange, onChangeAccount);
      };
    }
  }, [error, handleReActivate, onChangeAccount, onChangeChain]);
};
