/// <reference types="react" />
declare const storyConfig: {
    title: string;
    component: ({ title, content, isExpanded, toggle, }: {
        title: string;
        isExpanded: boolean;
        toggle: () => void;
        content: string | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    }) => JSX.Element;
};
export declare const Collapsable: () => JSX.Element;
export default storyConfig;
