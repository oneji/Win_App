import {StyleSheet} from 'react-native';
import {Colors} from '../../../src/Themes';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 36,
  },
  title: {
    paddingBottom: 11,
  },
  subtitle: {
    paddingHorizontal: 53.5,
    textAlign: 'center',
  },
  phoneCode: {
    marginLeft: 7,
    flexShrink: 1,
  },
  inputContainer: {
    paddingBottom: 13.5,
    borderBottomWidth: 1,
    borderBottomColor: '#DCDEE2',
    width: '100%',
    flexDirection: 'row',
    marginBottom: 24.5,
    marginTop: 30,
    backgroundColor: Colors.white,
    alignItems: 'center'
  },
  input: {
    marginLeft: 11.5,
    borderLeftWidth: 1,
    borderLeftColor: '#DCDEE2',
    paddingLeft: 11.5,
    width: '50%',
  },
  ofertaContainer: {
    marginBottom: 27,
  },
  oferta: {
    textDecorationLine: 'underline',
  },
  button: {
    width: '100%',
    marginBottom: 48,
  },
});
