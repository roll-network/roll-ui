import { createContext, useContext, useState } from "react";
import { useInactiveListener } from "../../hooks/web3";
import {
  CHAIN_ID_MAIN_NET,
  SUPPORTED_CHAIN_IDS,
  Web3Connectors,
} from "../../web3Connectors";

type Web3ConnectorsContext = {
  connectors: Web3Connectors | null;
  setConnectors: (c: Web3Connectors) => void;
};

export const Web3ConnectorsCtx = createContext<Web3ConnectorsContext>({
  connectors: null,
  setConnectors: () => null,
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
  const [connectors, setConnectors] = useState<Web3Connectors | null>(
    new Web3Connectors(
      fortmaticApiKey,
      portisDappID,
      defaultChainID,
      supportedChainIDs
    )
  );
  useInactiveListener(connectors);

  return (
    <Web3ConnectorsCtx.Provider value={{ connectors, setConnectors }}>
      {children}
    </Web3ConnectorsCtx.Provider>
  );
};
