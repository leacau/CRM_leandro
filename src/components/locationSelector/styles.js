import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: 170,
    height: 150,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerActions: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },

});
