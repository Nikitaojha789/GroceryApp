import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    productCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 8,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImageWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
    },
    productQuantity: {
        fontSize: 12,
        color: '#999',
        marginTop: 4,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6CC51D',
        marginVertical: 6,
    },
    addButton: {
        backgroundColor: '#6CC51D',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
    },
});

export default style;
