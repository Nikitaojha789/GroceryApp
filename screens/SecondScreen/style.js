import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    TextWrapper: {
        alignItems: "center",
        marginTop: 13,

    },
    Text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 800,
    },
    searchBar: {
        backgroundColor: "#cadfe6f1",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 10,
        borderRadius: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        elevation: 5,
    },
    SearchIcon: {
        top: 10,
        marginRight: 5,
    },
    products: {
        width: 300,
        // justifyContent: 'space-evenly',
        // marginLeft: 20,
        left: 30,

    },
});

export default styles;