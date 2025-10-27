import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     padding: 20,
    // },
    // imagestyle: {
    //     backgroundColor: "#fff"
    // },
    image: {
        top: 30,
        width: "100%",
        height: 250,
        marginBottom: 20,
    },
    backButton: {
        top: 30,
        left: 10,
    },

    container: {
        flex: 1,
        backgroundColor: "white",
    },

    imagestyle: {
        alignItems: "center",
        marginTop: 20,
    },

    Detail: {
        flex: 1,
        backgroundColor: "#F4F5F9",
        top: 105,
        padding: 20,
        marginTop: -50,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        bottom: 20,
    },
    price: {
        fontSize: 20,
        color: "green",
        marginBottom: 5,
        bottom: 22,
    },
    quantity: {
        fontSize: 16,
        color: "gray",
        bottom: 20,
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        bottom: 12,
        color: "#868889"
    },
    addButton: {
        backgroundColor: "#4CAF50",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",

    },
    addButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        // alignItems: "center",
        // textAlign: "center",
        right: -95,
    },
});
