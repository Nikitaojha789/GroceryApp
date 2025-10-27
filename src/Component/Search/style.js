import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, scaleFontSize } from '..//../../assets/styles/scaling';

const style = StyleSheet.create({
    searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: horizontalScale(16),
        backgroundColor: '#F3F5F9',
        borderRadius: horizontalScale(5),
        height: verticalScale(50),
    },
    searchIcon: {
        marginRight: horizontalScale(6),
    },
    searchInput: {
        flex: 1,
        height: '100%',
        fontFamily: 'Inter',
        fontSize: scaleFontSize(14),
        color: '#000',
    },
});

export default style;
