import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        // bottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
        color: '#555',
    },
    info: {
        fontSize: 16,
        marginVertical: 5,
    },
    total: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    titleWrapper: {
        flex: 1,
        paddingHorizontal: 10,
    }
});

export default styles;