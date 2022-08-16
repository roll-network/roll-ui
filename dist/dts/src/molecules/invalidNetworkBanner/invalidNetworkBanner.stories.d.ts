declare const storyConfig: {
    title: string;
    component: ({ title, supportedChainIDs, validChainID, }: {
        title?: string | undefined;
        supportedChainIDs?: number[] | undefined;
        chainID?: number | undefined;
        validChainID: number;
    }) => JSX.Element | null;
};
export declare const Default: () => JSX.Element;
export default storyConfig;
