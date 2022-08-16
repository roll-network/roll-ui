declare const storyConfig: {
    title: string;
    component: ({ url, maxLen }: {
        url: string;
        maxLen?: number | undefined;
    }) => JSX.Element;
};
export declare const Default: () => JSX.Element;
export default storyConfig;
