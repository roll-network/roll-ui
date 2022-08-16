declare type Props = {
    title?: string;
    supportedChainIDs?: number[];
    chainID?: number;
    validChainID: number;
};
export declare const InvalidNetworkBanner: ({ title, supportedChainIDs, validChainID, }: Props) => JSX.Element | null;
export {};
