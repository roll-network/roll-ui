/// <reference types="react" />
import { Web3Connectors } from "../../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
declare type Web3ConnectorsContext = {
    connectors: Web3Connectors;
    setConnectors: (c: Web3Connectors) => void;
    handleConnect: (c: AbstractConnector) => void;
    isActivating: boolean;
    eagerConnect: () => void;
};
export declare const Web3ConnectorsCtx: import("react").Context<Web3ConnectorsContext>;
export declare const useWeb3ConnectorsCtx: () => Web3ConnectorsContext;
export declare type Web3ConnectorProviderProps = {
    fortmaticApiKey: string;
    portisDappID: string;
    defaultChainID?: number;
    supportedChainIDs?: number[];
    eagerConnect?: boolean;
};
export declare const Web3ConnectorProvider: React.FC<Web3ConnectorProviderProps>;
export {};
