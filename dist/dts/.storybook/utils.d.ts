import { FunctionComponent } from "react";
export declare const titleBuilder: {
    atoms: (componentTitle: string) => string;
    molecules: (componentTitle: string) => string;
    organisms: (componentTitle: string) => string;
    templates: (componentTitle: string) => string;
    pages: (componentTitle: string) => string;
};
export declare const fromTemplate: <P>(component: FunctionComponent<P>, args?: Partial<P>) => FunctionComponent<P> & {
    args: Partial<P>;
};
