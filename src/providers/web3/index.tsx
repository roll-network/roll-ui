import { Web3Provider as EthersWeb3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "web3-react-core";
import {
  useWeb3ConnectorsCtx,
  Web3ConnectorProvider,
  Web3ConnectorProviderProps,
} from "../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useInactiveListener } from "../../hooks/web3";
import React from "react";

const getDefaultLibrary = (provider: any) => new EthersWeb3Provider(provider);

type Props = Web3ConnectorProviderProps & {
  getLibrary?: (
    provider?: any,
    connector?: AbstractConnector | undefined
  ) => any;
};

const InactiveListener: React.FC = ({ children }) => {
  const { connectors } = useWeb3ConnectorsCtx();
  useInactiveListener(connectors);
  return <>{children} </>;
};

export const Web3Provider: React.FC<Props> = ({
  children,
  getLibrary,
  fortmaticApiKey,
  portisDappID,
  defaultChainID,
  supportedChainIDs,
}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary || getDefaultLibrary}>
      <Web3ConnectorProvider
        fortmaticApiKey={fortmaticApiKey}
        portisDappID={portisDappID}
        defaultChainID={defaultChainID}
        supportedChainIDs={supportedChainIDs}
      >
        <InactiveListener>{children}</InactiveListener>
      </Web3ConnectorProvider>
    </Web3ReactProvider>
  );
};

export const withWeb3Provider = (component: React.ReactElement) => (
  <Web3Provider fortmaticApiKey="" portisDappID="">
    {component}
  </Web3Provider>
);
