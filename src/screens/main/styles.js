import { StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

export const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        marginVertical: 15,
    },
    title: {
        fontSize: 18,
        color: COLORS.text,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: "bold"
    },
    label: {
        fontSize: 15,
        color: COLORS.text,
        paddingVertical: 5,
        textAlign: 'center',
    },
    inputContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    input: {
        minWidth: 70,
        fontSize: 22,
        paddingVertical: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer: {
        width: '80%',
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    confirmedTitle: {
        fontSize: 16
    },
});