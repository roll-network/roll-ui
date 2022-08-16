/// <reference types="react" />
import { StyleProp, ViewStyle, GestureResponderEvent, ImageStyle, TextStyle, StyleSheet } from 'react-native';
import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';
import { InjectedConnector } from '@web3-react/injected-connector';
import { PortisConnector } from '@web3-react/portis-connector';
import { FortmaticConnector } from '@web3-react/fortmatic-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AbstractConnector } from '@web3-react/abstract-connector';
import * as _ethersproject_providers from '@ethersproject/providers';
import { Web3Provider as Web3Provider$1 } from '@ethersproject/providers';

declare type Props$a = {
    size?: "small" | "large" | number;
    style?: StyleProp<ViewStyle>;
};
declare const Activity: ({ style, size }: Props$a) => JSX.Element;

declare type ButtonProps = {
    style?: StyleProp<ViewStyle>;
    type: "primary" | "secondary" | "minimal" | "disabled";
    title?: string;
    onPress?: (e?: GestureResponderEvent) => void;
    isHovering?: boolean | undefined;
};
declare const Button: React.FC<ButtonProps>;

declare type Props$9 = {
    size?: number;
    style?: StyleProp<ImageStyle>;
    uri?: string;
    color?: Array<string>;
};
declare const DEFAULT_CIRCLE_IMG_SIZE = 48;
declare const CircleImg: ({ size, style, uri, color }: Props$9) => JSX.Element;

declare type Props$8 = {
    style?: StyleProp<ViewStyle>;
};
declare const Surface: React.FC<Props$8>;

declare const Tag: ({ title, color }: {
    title: string;
    color: string;
}) => JSX.Element;

declare type Props$7 = {
    disabled?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    capitalize?: boolean;
    value: string;
    label?: string;
    placeholder?: string;
    onChangeText: (val: string) => void;
    style?: StyleProp<TextStyle>;
    render?: ((props: RenderProps) => ReactNode) | undefined;
};
declare const TextField: ({ value, onChangeText, label, placeholder, style, capitalize, onBlur, onFocus, render, disabled, }: Props$7) => JSX.Element;

declare const TokenChip: ({ symbol, logo, size, }: {
    symbol: string;
    logo: string;
    size?: number | undefined;
}) => JSX.Element;

declare type TooltipComponentProps = {
    children: React.ReactElement;
    title: string | JSX.Element;
    open?: boolean;
    isMembership?: boolean;
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";
};
declare const ToolTip: React.FC<TooltipComponentProps>;

declare const truncateMaxChars: (str: string, maxlimit?: number) => string;
declare type TypographyProps = {
    children: any;
    style?: StyleProp<TextStyle>;
    weight?: "regular" | "bold";
    color?: string;
    numberOfLines?: number;
    onPress?: (event: GestureResponderEvent) => void;
    toolTipVal?: string;
    underline?: boolean;
};
declare const TypographyBase: React__default.ForwardRefExoticComponent<TypographyProps & {
    fontSize: number;
} & React__default.RefAttributes<unknown>>;
declare const SubCaption: ({ ...props }: TypographyProps) => JSX.Element;
declare const Caption: ({ ...props }: TypographyProps) => JSX.Element;
declare const Body: React__default.ForwardRefExoticComponent<TypographyProps & React__default.RefAttributes<unknown>>;
declare const SubHeader: ({ ...props }: TypographyProps) => JSX.Element;
declare const Header: ({ ...props }: TypographyProps) => JSX.Element;
declare const LargeHeader: ({ ...props }: TypographyProps) => JSX.Element;
declare const Title: ({ ...props }: TypographyProps) => JSX.Element;
declare const LargeTitle: ({ ...props }: TypographyProps) => JSX.Element;

declare const DEFAULT_MAX_DIGITS = 4;
declare type ValueProps = {
    displayValue: string;
    decimals: number;
    maxDigits?: number;
    style?: StyleProp<TextStyle>;
    renderValue?: (displayVal: string) => React.ReactElement;
};
declare const Value: ({ displayValue, decimals, maxDigits, style, renderValue, }: ValueProps) => JSX.Element;

declare const makeStyles: <T = {}>(styles: StyleSheet.NamedStyles<T>) => T;
declare const makeTextStyles: (styles: StyleSheet.NamedStyles<TextStyle>) => StyleSheet.NamedStyles<TextStyle> | StyleSheet.NamedStyles<any>;
declare const makeViewStyles: (styles: StyleSheet.NamedStyles<ViewStyle>) => StyleSheet.NamedStyles<ViewStyle> | StyleSheet.NamedStyles<any>;
declare const openSans: {
    reg: string;
    bold: string;
    boldItalic: string;
    extraBold: string;
    extraBoldItalic: string;
    italic: string;
    light: string;
    lightItalic: string;
    semiBold: string;
    semiBoldItalic: string;
};
declare const margins: {
    m8: {
        margin: number;
    };
    m16: {
        margin: number;
    };
    m24: {
        margin: number;
    };
    m32: {
        margin: number;
    };
    m40: {
        margin: number;
    };
    m48: {
        margin: number;
    };
    mb4: {
        marginBottom: number;
    };
    mb8: {
        marginBottom: number;
    };
    mb16: {
        marginBottom: number;
    };
    mb24: {
        marginBottom: number;
    };
    mb32: {
        marginBottom: number;
    };
    mb40: {
        marginBottom: number;
    };
    mb48: {
        marginBottom: number;
    };
    mt8: {
        marginTop: number;
    };
    mt16: {
        marginTop: number;
    };
    mt24: {
        marginTop: number;
    };
    mt32: {
        marginTop: number;
    };
    mt40: {
        marginTop: number;
    };
    mt48: {
        marginTop: number;
    };
    mr4: {
        marginRight: number;
    };
    mr8: {
        marginRight: number;
    };
    mr16: {
        marginRight: number;
    };
    mr24: {
        marginRight: number;
    };
    mr32: {
        marginRight: number;
    };
    mr40: {
        marginRight: number;
    };
    mr48: {
        marginRight: number;
    };
    ml4: {
        marginLeft: number;
    };
    ml8: {
        marginLeft: number;
    };
    ml16: {
        marginLeft: number;
    };
    ml24: {
        marginLeft: number;
    };
    ml32: {
        marginLeft: number;
    };
    ml40: {
        marginLeft: number;
    };
    ml48: {
        marginLeft: number;
    };
    mh8: {
        marginHorizontal: number;
    };
    mh16: {
        marginHorizontal: number;
    };
    mh24: {
        marginHorizontal: number;
    };
    mh32: {
        marginHorizontal: number;
    };
    mh40: {
        marginHorizontal: number;
    };
    mh48: {
        marginHorizontal: number;
    };
    mv8: {
        marginVertical: number;
    };
    mv16: {
        marginVertical: number;
    };
    mv24: {
        marginVertical: number;
    };
    mv32: {
        marginVertical: number;
    };
    mv40: {
        marginVertical: number;
    };
    mv48: {
        marginVertical: number;
    };
};
declare const padding: {
    p4: {
        padding: number;
    };
    p8: {
        padding: number;
    };
    p16: {
        padding: number;
    };
    p24: {
        padding: number;
    };
    p32: {
        padding: number;
    };
    p40: {
        padding: number;
    };
    p48: {
        padding: number;
    };
    pv4: {
        paddingVertical: number;
    };
    pv8: {
        paddingVertical: number;
    };
    pv16: {
        paddingVertical: number;
    };
    pv24: {
        paddingVertical: number;
    };
    pv32: {
        paddingVertical: number;
    };
    pv40: {
        paddingVertical: number;
    };
    pv48: {
        paddingVertical: number;
    };
    ph4: {
        paddingHorizontal: number;
    };
    ph8: {
        paddingHorizontal: number;
    };
    ph16: {
        paddingHorizontal: number;
    };
    ph24: {
        paddingHorizontal: number;
    };
    ph32: {
        paddingHorizontal: number;
    };
    ph40: {
        paddingHorizontal: number;
    };
    ph48: {
        paddingHorizontal: number;
    };
    pl4: {
        paddingLeft: number;
    };
    pl8: {
        paddingLeft: number;
    };
    pl16: {
        paddingLeft: number;
    };
    pl24: {
        paddingLeft: number;
    };
    pl32: {
        paddingLeft: number;
    };
    pl40: {
        paddingLeft: number;
    };
    pl48: {
        paddingLeft: number;
    };
    pr4: {
        paddingRight: number;
    };
    pr8: {
        paddingRight: number;
    };
    pr16: {
        paddingRight: number;
    };
    pr24: {
        paddingRight: number;
    };
    pr32: {
        paddingRight: number;
    };
    pr40: {
        paddingRight: number;
    };
    pr48: {
        paddingRight: number;
    };
    pb4: {
        paddingBottom: number;
    };
    pb8: {
        paddingBottom: number;
    };
    pb16: {
        paddingBottom: number;
    };
    pb24: {
        paddingBottom: number;
    };
    pb32: {
        paddingBottom: number;
    };
    pb40: {
        paddingBottom: number;
    };
    pb48: {
        paddingBottom: number;
    };
    pt4: {
        paddingTop: number;
    };
    pt8: {
        paddingTop: number;
    };
    pt16: {
        paddingTop: number;
    };
    pt24: {
        paddingTop: number;
    };
    pt32: {
        paddingTop: number;
    };
    pt40: {
        paddingTop: number;
    };
    pt48: {
        paddingTop: number;
    };
};
declare const containers: {
    shadowXL: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    shadow: {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    redBorder: {
        borderWidth: number;
        borderColor: string;
    };
    alignCenter: {
        alignItems: "center";
    };
    alignStart: {
        alignItems: "flex-start";
    };
    spaceBetween: {
        justifyContent: "space-between";
    };
    center: {
        alignItems: "center";
        justifyContent: "center";
    };
    fullWidth: {
        width: string;
    };
    halfWidth: {
        width: string;
    };
    fullHeight: {
        height: string;
    };
    flex1: {
        flex: number;
    };
    inputRadius: {
        borderRadius: number;
    };
    buttonRadius: {
        borderRadius: number;
    };
    row: {
        flexDirection: "row";
    };
    alignEnd: {
        alignItems: "flex-end";
    };
    justifyCenter: {
        justifyContent: "center";
    };
    justifyEnd: {
        justifyContent: "flex-end";
    };
    justifyStart: {
        justifyContent: "flex-start";
    };
    positionAbsolute: {
        position: "absolute";
    };
    borderRadius: {
        borderRadius: number;
    };
    borderRadiusXL: {
        borderRadius: number;
    };
    borderRadius2XL: {
        borderRadius: number;
    };
    borderRadius3XL: {
        borderRadius: number;
    };
    alignSelfEnd: {
        alignSelf: "flex-end";
    };
    alignSelfCenter: {
        alignSelf: "center";
    };
    alignSelfStart: {
        alignSelf: "flex-start";
    };
};
declare const FONT_SIZE_SUB_CAPTION = 8;
declare const FONT_SIZE_CAPTION = 12;
declare const FONT_SIZE_BODY = 14;
declare const FONT_SIZE_SUB_HEADER = 16;
declare const FONT_SIZE_HEADER = 20;
declare const FONT_SIZE_LARGE_HEADER = 24;
declare const FONT_SIZE_TITLE = 28;
declare const FONT_SIZE_LARGE_TITLE = 48;
declare const text: {
    center: {
        textAlign: "center";
    };
    right: {
        textAlign: "right";
    };
    body: {
        fontFamily: string;
    };
    bold: {
        fontFamily: string;
    };
    h1: {
        fontSize: number;
    };
    h2: {
        fontSize: number;
    };
    h3: {
        fontSize: number;
    };
    h4: {
        fontSize: number;
    };
    h5: {
        fontSize: number;
    };
    h6: {
        fontSize: number;
    };
    caption: {
        fontSize: number;
    };
    subCaption: {
        fontSize: number;
    };
    heading: {
        fontSize: number;
    };
    display: {
        color: string;
    };
    faded: {
        color: string;
    };
    warning: {
        color: string;
    };
};

declare const dodgerBlue = "#004eff";
declare const cyanBlue = "#0085ff";
declare const darkNavy = "#293354";
declare const ghostWhite = "#f7f8fb";
declare const aliceBlue = "#f3f8fe";
declare const white = "#ffffff";
declare const grey = "#7C7C7C";
declare const charcoalBlack = "#212529";
declare const crimson = "#d0031c";
declare const orange = "#f7b217";
declare const solitudeGrey = "#BBBEC2";
declare const mistyRose = "#ffd8dd";
declare const lavendar = "#ccddff";
declare const lightGray = "#c4c4c4";

declare const injectFonts: () => void;

interface PaletteBase {
    primary: string;
    secondary: string;
    highlight: string;
    error: string;
    warning: string;
}
interface PaletteBackground extends PaletteBase {
    lowLight: string;
    tertiary: string;
    page: string;
}
declare type Theme = {
    background: PaletteBackground;
    text: PaletteBase;
};
declare const lightTheme: Theme;

declare type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
declare const ThemeCtx: React$1.Context<ThemeContext>;
declare const ThemeProvider: React.FC;

declare const ModalProvider: React.FC;

declare class Web3Connectors {
    supportedChainIDs: number[];
    defaultChainID: number;
    injected: InjectedConnector;
    walletConnect: WalletConnectConnector;
    formatic: FortmaticConnector;
    portis: PortisConnector;
    constructor(fortmaticApiKey: string, portisDappID: string, defaultChainID?: number, supportedChainIDs?: number[]);
}

declare type Web3ConnectorsContext = {
    connectors: Web3Connectors;
    setConnectors: (c: Web3Connectors) => void;
    handleConnect: (c: AbstractConnector) => void;
    isActivating: boolean;
    eagerConnect: () => void;
};
declare const Web3ConnectorsCtx: React$1.Context<Web3ConnectorsContext>;
declare const useWeb3ConnectorsCtx: () => Web3ConnectorsContext;
declare type Web3ConnectorProviderProps = {
    fortmaticApiKey: string;
    portisDappID: string;
    defaultChainID?: number;
    supportedChainIDs?: number[];
    eagerConnect?: boolean;
};
declare const Web3ConnectorProvider: React.FC<Web3ConnectorProviderProps>;

declare type Props$6 = Web3ConnectorProviderProps & {
    getLibrary?: (provider?: any, connector?: AbstractConnector | undefined) => any;
};
declare const Web3Provider: React__default.FC<Props$6>;
declare const withWeb3Provider: (component: React__default.ReactElement) => JSX.Element;

declare type ModalOpts = {
    style?: React__default.CSSProperties;
};
declare type ModalRenderer = () => React__default.ReactElement | null;
declare type ModalContext = {
    open: boolean;
    setOpen: (open: boolean) => void;
    renderer: ModalRenderer;
    opts: ModalOpts;
    setRenderer: (renderer: ModalRenderer, opts?: ModalOpts) => void;
};

declare const useInactiveListener: (connectors: Web3Connectors | null, onChangeChain?: () => void, onChangeAccount?: () => void) => void;
declare const useLibrary: () => Web3Provider$1 | undefined;
declare const useSigner: () => _ethersproject_providers.JsonRpcSigner | undefined;
declare const useEthAddress: () => string | null | undefined;
declare const useChainID: () => number | undefined;

declare const useTheme: () => Theme;
declare const useModal: () => ModalContext;

declare type Props$5 = {
    title: string;
    isExpanded: boolean;
    toggle: () => void;
    content: React.ReactElement | string;
};
declare const CollapsableView: ({ title, content, isExpanded, toggle, }: Props$5) => JSX.Element;

declare type HandleWeb3Connect = (c: AbstractConnector) => void;
declare type Props$4 = {
    buttonStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
    activity?: boolean;
};
declare const ConnectWeb3Button: ({ buttonStyle, onPress, activity, }: Props$4) => JSX.Element;

declare type Props$3 = {
    onSelect?: () => void;
    onClose?: () => void;
    mobile?: boolean;
};
declare const ConnectWeb3Options: ({ onSelect, onClose, mobile }: Props$3) => JSX.Element;

declare type Props$2 = {
    url: string;
    maxLen?: number;
};
declare const CopyLink: ({ url, maxLen }: Props$2) => JSX.Element;

declare type Props$1 = {
    open: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    renderDropdown: () => React.ReactElement;
    alignLeft?: boolean;
};
declare const Dropdown: React.FC<Props$1>;

declare const Footer: () => JSX.Element;

declare type Props = {
    title?: string;
    supportedChainIDs?: number[];
    chainID?: number;
    validChainID: number;
};
declare const InvalidNetworkBanner: ({ title, supportedChainIDs, validChainID, }: Props) => JSX.Element | null;

declare const toastSuccess: (message: string) => string;
declare const RollToast: React.FC;

declare const ModalManager: () => JSX.Element;

declare const commafy: (n?: string | number, digits?: number) => string;
declare const truncateText: (str: string, len: number) => string;

declare const openLink: (link: string, newTab?: boolean) => void;

declare function shortenAddress(address: string, digits?: number): string;
declare function isAddress(value: string): string | false;
declare const etherscanAccountUrl: (address: string) => string;

export { Activity, Body, Button, ButtonProps, Caption, CircleImg, CollapsableView, ConnectWeb3Button, ConnectWeb3Options, CopyLink, DEFAULT_CIRCLE_IMG_SIZE, DEFAULT_MAX_DIGITS, Dropdown, FONT_SIZE_BODY, FONT_SIZE_CAPTION, FONT_SIZE_HEADER, FONT_SIZE_LARGE_HEADER, FONT_SIZE_LARGE_TITLE, FONT_SIZE_SUB_CAPTION, FONT_SIZE_SUB_HEADER, FONT_SIZE_TITLE, Footer, HandleWeb3Connect, Header, InvalidNetworkBanner, LargeHeader, LargeTitle, ModalManager, ModalProvider, RollToast, SubCaption, SubHeader, Surface, Tag, TextField, Theme, ThemeCtx, ThemeProvider, Title, TokenChip, ToolTip, TooltipComponentProps, TypographyBase, Value, ValueProps, Web3ConnectorProvider, Web3ConnectorProviderProps, Web3ConnectorsCtx, Web3Provider, aliceBlue, charcoalBlack, commafy, containers, crimson, cyanBlue, darkNavy, dodgerBlue, etherscanAccountUrl, ghostWhite, grey, injectFonts, isAddress, lavendar, lightGray, lightTheme, makeStyles, makeTextStyles, makeViewStyles, margins, mistyRose, openLink, openSans, orange, padding, shortenAddress, solitudeGrey, text, toastSuccess, truncateMaxChars, truncateText, useChainID, useEthAddress, useInactiveListener, useLibrary, useModal, useSigner, useTheme, useWeb3ConnectorsCtx, white, withWeb3Provider };
