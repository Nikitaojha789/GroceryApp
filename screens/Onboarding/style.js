import { StyleSheet, Dimensions } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        overflow: 'hidden',
    },

    topSection: {
        width: '100%',
        height: verticalScale(350),
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },


    endSection: {
        width: horizontalScale(414.1),
        height: verticalScale(424.64),
        bottom: 50,
    },

    image: {
        width: '100%',
        height: verticalScale(350),
        marginBottom: 0,
        top: 0,
    },

    image2: {
        width: '100%',
        height: verticalScale(360),
        marginBottom: 0,
        top: 0,
    },

    image3: {
        width: '100%',
        height: verticalScale(350),
        marginBottom: 0,
        top: 0,
    },


    title: {
        fontSize: 30,
        fontWeight: '700',
        lineHeight: '130%',
        letterSpacing: horizontalScale(2),
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        width: horizontalScale(274),
        height: verticalScale(78),
        alignSelf: 'center',
    },

    subtitle: {
        fontSize: 14,
        color: '#777',
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

    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    card: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 24,
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },

});

export default styles;
