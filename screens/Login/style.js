import { StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling'; // Make sure this exists

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },

    // image: {
    //     width: '100%',
    //     height: 400,
    //     borderBottomLeftRadius: 25,
    //     borderBottomRightRadius: 25,
    // },

    card: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 10,
        marginTop: -50,
        justifyContent: 'flex-start',

    },
    headerTitle: {
        fontFamily: 'Popins',
        fontSize: 25,
        fontWeight: '800',
        color: '#000',
    },

    headerText: {
        fontSize: 13,
        fontWeight: '500',
        color: '#333',
        marginBottom: 5,
    },

    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000',
        marginBottom: 5,
    },

    subtitle: {
        fontSize: 13,
        color: '#666',
        marginBottom: 20,
    },

    // input: {
    //     height: 45,
    //     borderWidth: 1,
    //     borderColor: '#E6E6E6',
    //     borderRadius: 10,
    //     paddingHorizontal: 15,
    //     fontSize: 14,
    //     marginBottom: 15,
    //     color: '#333',
    // },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 16,
        backgroundColor: '#FFF',

    },


    forgotText: {
        alignSelf: 'flex-end',
        fontSize: 12,
        color: '#407EC7',
        marginBottom: 20,
    },

    button: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },


    loginText: {
        textAlign: 'center',
        fontSize: 13,
        color: '#555',
    },

    loginLink: {
        color: '#000000',
        fontWeight: '700',
    },

    image: {
        width: '100%',
        height: 380,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        // top: 30,
    },

    headerOverlay: {
        position: 'absolute',
        top: 30,
        left: 20,
        right: 20,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    backButton: {
        padding: 8,
    },

    headerTitleOverlay: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        flex: 1,
        textAlign: 'center',
        marginRight: 40,
    },

    rememberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    rememberLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rememberText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#868889',
    },


});

export default styles;
