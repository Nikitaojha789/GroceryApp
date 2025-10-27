import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F9",
    },

    header: {
        flexDirection: "row",
        backgroundColor: "#fff",
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        width: "100%",
        height: "15%",
    },

    listWrapper: {
        flex: 1,
        padding: 10,
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 14,
        padding: 9,
        marginHorizontal: 12,
        marginVertical: 6,
        flex: 1,
        elevation: 3,
    },

    productImage: {
        width: 60,
        height: 60,
        resizeMode: "contain",
        marginRight: 12,
    },
    infoWrapper: {
        flex: 1,
    },

    productTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    productQuantity: {
        fontSize: 14,
        color: "#888",
    },
    productPrice: {
        fontSize: 14,
        fontWeight: "500",
        color: "#22AA4D",
    },
    counterWrapper: {
        // flexDirection: "row",
        alignItems: "center",
    },
    counterButton: {
        // backgroundColor: "#22AA4D",
        color: "#22AA4D",
        width: 28,
        height: 28,
        // borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    counterText: {
        color: "#22AA4D",
        fontSize: 16,
        fontWeight: "bold",
    },
    count: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: "600",
    },
    // header: {
    //     backgroundColor: "#fff",
    //     paddingVertical: 15,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     borderBottomWidth: 1,
    //     borderBottomColor: "#eee",
    //     width: "100%",
    // },
    headerTitle: {

        fontSize: 18,
        fontWeight: "700",
        color: "#333",
    },

    backButton: {
        right: 110,
    },

    deleteIcon: {
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
    },

});
