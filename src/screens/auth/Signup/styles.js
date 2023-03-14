import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    // justifyContent: 'center',
    // flexDirection: 'column',
    // alignItems: 'center',
    // height: '100%',
  },
  agreedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreedText: {
    color: colors.blue,
    marginHorizontal: 13,
  },
  agreedTextBold: {
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  buttonCont: {width: '100%', flexDirection: 'row'},
});
