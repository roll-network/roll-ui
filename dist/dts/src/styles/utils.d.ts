import { StyleSheet, TextStyle, ViewStyle } from "react-native";
export declare const makeStyles: <T = {}>(styles: StyleSheet.NamedStyles<T>) => T;
export declare const makeTextStyles: (styles: StyleSheet.NamedStyles<TextStyle>) => StyleSheet.NamedStyles<TextStyle> | StyleSheet.NamedStyles<any>;
export declare const makeViewStyles: (styles: StyleSheet.NamedStyles<ViewStyle>) => StyleSheet.NamedStyles<ViewStyle> | StyleSheet.NamedStyles<any>;
export declare const openSans: {
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
export declare const margins: {
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
export declare const padding: {
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
export declare const containers: {
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
export declare const FONT_SIZE_SUB_CAPTION = 8;
export declare const FONT_SIZE_CAPTION = 12;
export declare const FONT_SIZE_BODY = 14;
export declare const FONT_SIZE_SUB_HEADER = 16;
export declare const FONT_SIZE_HEADER = 20;
export declare const FONT_SIZE_LARGE_HEADER = 24;
export declare const FONT_SIZE_TITLE = 28;
export declare const FONT_SIZE_LARGE_TITLE = 48;
export declare const text: {
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
