import { StyleSheet } from 'react-native';
import { hexToRGBA} from '../../../src/Common/helpers';
import { Colors } from '../../../src/Themes';

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 9,
        backgroundColor: Colors.white,
    },
    header: {
        paddingTop: 17,
    },
    filter: {
        paddingHorizontal: 10,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 268,
        maxHeight: 268,
        backgroundColor: hexToRGBA(Colors.lightGrey, 0.21),
        borderRadius: 13,
    },
    priceWrapper: {
        position: 'absolute',
        left: 11,
        bottom: 10,
        backgroundColor: hexToRGBA(Colors.defaultBlack, 0.6),
        paddingHorizontal: 25,
        paddingVertical: 5,
        borderRadius: 1000,
    },
    courseContainer: {
        marginTop: 21.2,
    },
    userDetails: {
        alignItems: 'flex-start',
        paddingHorizontal: 11,
    },
});