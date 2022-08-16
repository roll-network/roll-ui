/// <reference types="react" />
declare type Props = {
    open: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    renderDropdown: () => React.ReactElement;
    alignLeft?: boolean;
};
export declare const Dropdown: React.FC<Props>;
export {};
