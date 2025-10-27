import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b9d5e0f1",
        height: 200,
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
        justifyContent: 'space-evenly',
        // alignItems: "center",
        elevation: 5,
    },

    Text: {
        textAlign: "center",
    },
    TextWrapper: {},
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    ImageWrapper: {
        marginTop: 10,
    },

    expression: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
    },
    buttonWrappper: {
        backgroundColor: "#9bc4a4ff",
        padding: 5,
        width: "50%",
        borderRadius: 10,
    },
    Button: {
        textAlign: "center",

    }
});

export default styles;