declare const conf: {
    title: string;
    component: ({ onSelect, onClose, mobile }: {
        onSelect?: (() => void) | undefined;
        onClose?: (() => void) | undefined;
        mobile?: boolean | undefined;
    }) => JSX.Element;
};
export declare const WebOptions: () => JSX.Element;
export declare const MobileOptions: () => JSX.Element;
export default conf;
