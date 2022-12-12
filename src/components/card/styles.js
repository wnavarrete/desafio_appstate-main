import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
    }
});