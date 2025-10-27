import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    Main: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        marginTop: 20,
    },



    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8,
        resizeMode: 'contain',
        tintColor: '#B0B0B0',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        paddingHorizontal: 16,
        height: 48,
        marginHorizontal: 24,
        marginTop: 20,
    },

    searchPlaceholder: {
        marginLeft: 10,
        fontSize: 14,
        color: '#B0B0B0',
        flex: 1,
    },

    spacer: {
        width: 10,
    },


    filterButton: {
        marginLeft: 12,
        padding: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
    },

    searchInput: {
        flex: 1,
        marginRight: 10,
    },
    highlightedImage: {
        width: '90%',
        height: 240,
        borderRadius: 0,
        alignSelf: 'center',
        marginTop: 20,
    },
    categoryHeader: {
        marginTop: 20,
        marginHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1D1E20',
    },
    arrow: {
        fontSize: 18,
        color: '#6CC51D',
    },
    categories: {
        paddingHorizontal: 24,
        marginTop: 12,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 16,
    },

    categoryIconWrapper: {
        width: 64,
        height: 64,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },

    categoryBg: {
        width: 64,
        height: 64,
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'contain',
    },

    iconCentered: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
    },

    categoryText: {
        marginTop: 8,
        fontSize: 12,
        fontWeight: '500',
        color: '#333',
        textAlign: 'center',
    },

});

export default style;
