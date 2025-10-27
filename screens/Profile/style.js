import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F9',
    },
    topSection: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 0,
    },
    profileImage: {
        width: 100,
        height: 100,
        top: 40,
        borderRadius: 50,
        zIndex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        zIndex: 1,
        top: 30,
    },
    email: {
        fontSize: 12,
        color: 'gray',
        zIndex: 1,
        top: 30,
    },
    bottomSection: {
        flex: 1,
        backgroundColor: '#F4F5F9',
        padding: 20,
        bottom: 50,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        top: 70,
        borderBottomColor: '#E0E0E0',
    },
    leftIcon: {
        marginRight: 15,
    },
    listText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    goIcon: {
        marginLeft: 10,
    },

});

export default style;

