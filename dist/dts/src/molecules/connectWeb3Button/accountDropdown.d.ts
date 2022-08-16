import { AbstractConnector } from "@web3-react/abstract-connector";
export declare type HandleWeb3Connect = (c: AbstractConnector) => void;
declare type Props = {
    onSwitchAccounts: () => void;
};
export declare const AccountDropdwn: ({ onSwitchAccounts }: Props) => JSX.Element;
export {};
