import { DefaultTheme } from "@react-navigation/native";
import colours from "../components/config/colours";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colours.primary,
        background: colours.white,
    },
};