import { Web3Connectors } from "../../web3Connectors";
import { AbstractConnector } from "@web3-react/abstract-connector";
export declare type WalletProvider = {
    title: string;
    logo: JSX.Element;
};
declare type WalletProviderOption = {
    provider: WalletProvider;
    connector: AbstractConnector;
};
export declare const WalletProviderMetaMask: WalletProvider;
export declare const WalletProviderWalletConnect: WalletProvider;
export declare const WalletProviderCoinBase: WalletProvider;
export declare const WalletProviderFortmatic: WalletProvider;
export declare const WalletProviderPortis: WalletProvider;
export declare const buildWalletOptionsWeb: (connectors: Web3Connectors) => WalletProviderOption[];
export declare const buildWalletOptionsMobile: (connectors: Web3Connectors) => WalletProviderOption[];
export {};
