import React from "react";
import { Web3ConnectorProviderProps } from "../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
declare type Props = Web3ConnectorProviderProps & {
    getLibrary?: (provider?: any, connector?: AbstractConnector | undefined) => any;
};
export declare const Web3Provider: React.FC<Props>;
export declare const withWeb3Provider: (component: React.ReactElement) => JSX.Element;
export {};
