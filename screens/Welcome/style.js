import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: width,
        height: height * 0.60,

    },
    card: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 5,
        bottom: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 25,
    },
    googleBtn: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        paddingVertical: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    googleBtnText: {
        color: '#555',
        fontWeight: '600',
    },
    button: {
        paddingVertical: 14,
        borderRadius: 6,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    loginText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666',
    },
    loginLink: {
        fontWeight: 'bold',
        color: '#6CC51D',
    },

    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        padding: 8,
    },

    centeredTextWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 1,
    },

    centeredWelcome: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },

});
