import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    backgroundColor: colors.dark,
    padding: 20,
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: 100,
    // backgroundColor: colors.lightDark,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    color: colors.light,
    fontSize: 28,
    fontWeight: 'bold',
  },
});
