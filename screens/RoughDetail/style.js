import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    HeadingWrapper: {
        alignItems: "center",
        bottom: 30,
    },
    Heading: {
        fontSize: 32,
        fontWeight: '800'
    },
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: "#b9d5e0f1",
        height: '60%',
        width: '80%',
        borderRadius: 20,
        margin: 10,
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: "center",
        elevation: 5,
    },


    Text: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 500,
    },
    TextWrapper: {
        height: 40,
    },
    image: {
        width: 200,
        height: 180,
        borderRadius: 10,
        backgroundColor: "#d6e2f3ff"
    },
    ImageWrapper: {
        marginTop: 10,
    },

    expression: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    add: {
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 10,
    },
    backButton: {
        right: 140,
        bottom: 50,
    }
});

export default style;