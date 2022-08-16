/// <reference types="react" />
import { StyleProp, ViewStyle, GestureResponderEvent, ImageStyle, TextStyle, StyleSheet } from 'react-native';
import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import { RenderProps } from 'react-native-paper/lib/typescript/components/TextInput/types';

declare type Props$3 = {
    style?: StyleProp<ViewStyle>;
    type: "primary" | "secondary" | "minimal" | "disabled";
    title?: string;
    onPress?: (e?: GestureResponderEvent) => void;
    isHovering?: boolean | undefined;
};
declare const Button: React.FC<Props$3>;

declare type Props$2 = {
    size?: number;
    style?: StyleProp<ImageStyle>;
    uri?: string;
    color?: Array<string>;
};
declare const DEFAULT_CIRCLE_IMG_SIZE = 48;
declare const CircleImg: ({ size, style, uri, color }: Props$2) => JSX.Element;

declare type Props$1 = {
    style?: StyleProp<ViewStyle>;
};
declare const Surface: React.FC<Props$1>;

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

declare type Props = {
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
declare const TextField: ({ value, onChangeText, label, placeholder, style, capitalize, onBlur, onFocus, render, disabled, }: Props) => JSX.Element;

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

declare type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
declare const ThemeCtx: React$1.Context<ThemeContext>;
declare const ThemeProvider: React.FC;

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

declare const useTheme: () => Theme;
declare const useModal: () => ModalContext;

declare const commafy: (n?: string | number, digits?: number) => string;
declare const truncateText: (str: string, len: number) => string;

export { Body, Button, Caption, CircleImg, DEFAULT_CIRCLE_IMG_SIZE, DEFAULT_MAX_DIGITS, FONT_SIZE_BODY, FONT_SIZE_CAPTION, FONT_SIZE_HEADER, FONT_SIZE_LARGE_HEADER, FONT_SIZE_LARGE_TITLE, FONT_SIZE_SUB_CAPTION, FONT_SIZE_SUB_HEADER, FONT_SIZE_TITLE, Header, LargeHeader, LargeTitle, Props$3 as Props, SubCaption, SubHeader, Surface, TextField, ThemeCtx, ThemeProvider, Title, TypographyBase, Value, ValueProps, aliceBlue, charcoalBlack, commafy, containers, crimson, cyanBlue, darkNavy, dodgerBlue, ghostWhite, grey, injectFonts, lavendar, lightGray, makeStyles, makeTextStyles, makeViewStyles, margins, mistyRose, openSans, orange, padding, solitudeGrey, text, truncateMaxChars, truncateText, useModal, useTheme, white };
