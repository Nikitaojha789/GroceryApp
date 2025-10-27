import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: " #e7e3e3ff",
        flex: 1,
    },
    searchBar: {
        paddingHorizontal: 20,
        flexDirection: "row",
        border: 1,
        borderBottomColor: "#aa8787ff",
        backgroundColor: "#f3a7edff",
        borderRadius: 15,
        // paddingVertical: 30,
        height: 60,
        marginTop: 15,
        marginHorizontal: 15,
        elevation: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
    searchPlaceholder: {
        marginLeft: 10,
        fontSize: 14,
        color: '#777171ff',
        flex: 1,
        marginTop: 10,
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginTop: 10,
        resizeMode: 'contain',
        tintColor: '#B0B0B0',
    },
    filterIcon: {
        // marginRight: 30,
        marginTop: 10,
        resizeMode: 'contain',
        tintColor: '#B0B0B0',
    },
    spacer: {
        width: 10,
    },
    imageWrapper: {
        height: "80%",
        marginTop: 10,
        backgroundColor: "#fff"
    },
    image: {
        position: "relative",
        height: "50%",
        width: "100%",
        resizeMode: "cover"
    },
    card: {
        backgroundColor: "#e4cfdfff",
        flex: 1,
        width: "100%",
        flexDirection: "row",
        padding: 30,
        position: "absolute",
        bottom: 0,
        // zIndex: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 8,
        height: "50%",
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
    },
});

export default style;