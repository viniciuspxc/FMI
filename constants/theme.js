import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    black: "#1E1F20",
    white: "#FFFFFF",
    lightGray: "#FCFBFC",
    gray: "#C1C3C5",
    darkgray: "#C3C6C7",
    transparent: "transparent",
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 45,
    title: 38,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Roboto", fontSize: SIZES.largeTitle, lineHeight: 55 },
    title: { fontFamily: "Roboto", fontSize: SIZES.title, lineHeight: 55 },
    h1: { fontFamily: "Roboto", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto", fontSize: SIZES.body5, lineHeight: 22 },
};

export const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        color: COLORS.gray
    },
    list: {
        fontSize: 30,
        color: COLORS.white
    },
    logoView: {
        flexDirection: 'column',
        marginTop: SIZES.padding * 20,
        height: 500,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerView: {
        flexDirection: 'column',
        marginTop: SIZES.padding * 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextInput: {
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.h2
    },
    SwitchView: {
        justifyContent: 'space-between',
        marginEnd: 40,
        marginTop: SIZES.padding * 1,
        alignItems: 'center',
        flexDirection: 'row',
    }
});

const appTheme = { COLORS, SIZES, FONTS, styles };

export default appTheme;
