import { StyleSheet } from "react-native";

export default StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 45,
        backgroundColor: "#fff",
        borderTopWidth: 0.5,
        borderTopColor: "#ddd",
        elevation: 5,
    },
    cartButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "green",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        elevation: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
});
