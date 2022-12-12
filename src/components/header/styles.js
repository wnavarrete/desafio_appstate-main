import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../constants/colors";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        height: height * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        color: COLORS.white,
        fontFamily: 'Montserrat'
    }
});