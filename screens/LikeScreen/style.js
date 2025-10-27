import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    heading: {
        backgroundColor: "#a9bdd4ff",
        padding: 20,
        margin: (0, 0, 0, 10),
        borderBottomColor: "#283031ff",
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        fontWeight: '600',
        textAlign: "center",
        flex: 1,
        marginLeft: -24,
    },
    backButton: {
        paddingRight: 10,
    },
    EmptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Empty: {
        fontSize: 24,
        color: "#d41616ff",
        fontWeight: "500",
    },
    Container: {
        backgroundColor: "#a9bdd4ff",
        flexDirection: "row",
        margin: 10,
        padding: 10,
        width: '100%',
        borderRadius: 20,
        elevation: 8,
        right: 10,
        alignItems: 'center',
        bottom: 25,

    },
    ImageAndControlsWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
    },
    quantityContainer: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: "space-between"
    },
    quantityButton: {
        fontSize: 20,
        fontWeight: 'bold',
        // paddingHorizontal: 10,
        // paddingVertical: 5,
        // borderWidth: 1,
        // borderColor: '#000',
        borderRadius: 5,
        marginHorizontal: 5,
        justifyContent: "space-between"
    },
    DetailsAndRemoveWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingLeft: 10,
    },
    TextWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        fontSize: 14,
        color: '#555',
    },
    quantity: {
        fontSize: 14,
        color: '#555',
    },
    buttonstyle: {
        // top: 5,
        justifyContent: "flex-end",
    },
    handleRemove: {
        backgroundColor: "rgba(109, 194, 70, 1)",
        borderRadius: 10,
        padding: 8,
    },
});

export default style;
