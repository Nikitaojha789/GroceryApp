import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '500',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 28,
        // left: 17,
    },
    // header: {
    //     flexDirection: 'row',
    //     width: 284,
    //     height: 27,
    //     top: 40,
    //     left: 17,
    // },

    body: {
        top: 50,
    },

    mainTitle: {
        fontFamily: 'popins',
        fontSize: 26,
        fontWeight: '700',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 15,
    },
    subtitle2: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000000',
        textAlign: 'center',
        bottom: 38,
    },
    input: {
        height: 50,
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6CC51D',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    forgotText: {
        color: '#6CC51D',
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 12,
    },
    resendText: {
        color: '#111827',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 16,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    otpInput: {
        width: 45,
        height: 55,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: '#111827',
    },
});

export default styles;
