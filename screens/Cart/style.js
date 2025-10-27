import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F5F9",
    },
    header: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        width: "100%",
        height: "15%",
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#333",
    },
    bottom: {
        flex: 1,
        backgroundColor: "#F4F5F9",
        padding: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: '130%',
        letterSpacing: 1,
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        alignSelf: 'center',
    },

    subTitle: {
        fontSize: 14,
        color: '#868889',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 40,
    },
    button: {
        width: width * 0.9,
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
