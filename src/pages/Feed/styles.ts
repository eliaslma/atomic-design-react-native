import { StyleSheet } from 'react-native';
import { colors } from '../../global/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 40,
  },
  headerSide: {
    flexDirection: 'row',
    minWidth: 66,
    alignItems: 'center'
  },
  messengerIcon: {
    marginLeft: 15
  }
});