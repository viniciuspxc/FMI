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
    title:{
        fontSize: 40,
        color: COLORS.gray
    },
    list:{
        fontSize: 30,
        marginTop: SIZES.padding * 1,
        color: COLORS.white,
        Flex: 1,
        flexDirection: 'row',
    },
    EditProfileList:{
        fontSize: 25,
        color: COLORS.white,
        flexDirection: 'row',
    },
    GoalsList:{
        fontSize: 30,
        marginTop: SIZES.padding * 1,
        marginStart: SIZES.padding * 2,
        marginEnd: SIZES.padding * 2,
        marginBottom: SIZES.padding * 2,
        color: COLORS.white,
        Flex: 1,
        flexDirection: 'row',
        backgroundColor: "#333",
        borderRadius: 20,
    },
    categories:{
        fontSize: 25,
        color: COLORS.white,
        height: 40,
        backgroundColor: "#444",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    income:{
        fontSize: 25,
        color: COLORS.white,
        height: 40,
        backgroundColor: "#006b15",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    outcome:{
        fontSize: 25,
        color: COLORS.white,
        height: 40,
        backgroundColor: "#6b0000",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoView:{
        flexDirection: 'column',
        marginTop: SIZES.padding * 5,
        //height: 500,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.padding * 2,
    },
    headerView:{
        flexDirection: 'column',
        marginTop: SIZES.padding * 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    HomeButton:{
        marginTop: SIZES.padding * 2,
        //height: 50,
        width: 400,
        marginHorizontal: SIZES.padding * 2,
        backgroundColor: "#333",
        borderRadius: SIZES.radius / 1,
        borderLeftColor: COLORS.white,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextHomeButton:{
        marginVertical: SIZES.padding * 0.5,
        color: COLORS.white,
        color: COLORS.white, ...FONTS.h1
    },
    TextInput:{
        marginVertical: SIZES.padding,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        height: 40,
        color: COLORS.white,
        ...FONTS.h2
    },
    SwitchView:{
        justifyContent: 'space-between',
        marginEnd: 40,
        marginTop: SIZES.padding * 1, 
        alignItems: 'center',
        flexDirection: 'row', 
    }
});

const appTheme = { COLORS, SIZES, FONTS, styles };

export default appTheme;