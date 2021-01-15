import {StyleSheet} from 'react-native';
import {hexToRGBA} from '../../src/Common/helpers';
import {Colors} from '../../src/Themes';

export const Styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        height: 36,
        borderRadius: 100,
        overflow: 'hidden',
        paddingHorizontal: 17,
        backgroundColor: hexToRGBA(Colors.lightGrey, 0.21),
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWrap: {
        height: '100%',
        justifyContent: 'center',
        paddingRight: 8,
    },
    input: {
        width: '100%',
        height: '100%',
    },
});
