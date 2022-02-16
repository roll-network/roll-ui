import { Web3Provider } from "@ethersproject/providers";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useWeb3React } from "web3-react-core";
import { useInactiveListener } from "../../hooks/web3";
import {
  CHAIN_ID_MAIN_NET,
  SUPPORTED_CHAIN_IDS,
  Web3Connectors,
} from "../../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";

type Web3ConnectorsContext = {
  connectors: Web3Connectors | null;
  setConnectors: (c: Web3Connectors) => void;
  handleConnect: (c: AbstractConnector) => void;
  isActivating: boolean;
};

export const Web3ConnectorsCtx = createContext<Web3ConnectorsContext>({
  connectors: null,
  setConnectors: () => null,
  handleConnect: (c: AbstractConnector) => null,
  isActivating: false,
});

export const useWeb3ConnectorsCtx = () => useContext(Web3ConnectorsCtx);

export type Web3ConnectorProviderProps = {
  fortmaticApiKey: string;
  portisDappID: string;
  defaultChainID?: number;
  supportedChainIDs?: number[];
};

export const Web3ConnectorProvider: React.FC<Web3ConnectorProviderProps> = ({
  children,
  fortmaticApiKey,
  portisDappID,
  defaultChainID = CHAIN_ID_MAIN_NET,
  supportedChainIDs = SUPPORTED_CHAIN_IDS,
}) => {
  const { activate, connector } = useWeb3React<Web3Provider>();
  const [isActivating, setIsActivating] = useState(false);
  const [connectors, setConnectors] = useState<Web3Connectors | null>(
    new Web3Connectors(
      fortmaticApiKey,
      portisDappID,
      defaultChainID,
      supportedChainIDs
    )
  );
  useInactiveListener(connectors);

  const handleConnect = useCallback(
    (c: AbstractConnector) => {
      setIsActivating(true);
      activate(c);
    },
    [activate, setIsActivating]
  );

  // listen to connection state and turn off activity
  useEffect(() => {
    if (isActivating && connector) {
      setIsActivating(false);
    }
  }, [connector, isActivating]);

  // connect to injected connecter if already authorized
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
  }, []); // only run on mount

  return (
    <Web3ConnectorsCtx.Provider
      value={{ connectors, setConnectors, handleConnect, isActivating }}
    >
      {children}
    </Web3ConnectorsCtx.Provider>
  );
};
