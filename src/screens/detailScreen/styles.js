import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailContainer: {
    justifyContent: 'center',
  },
  titleDetail: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#B7CECE',

  },
  name: {
    fontSize: 18,
    color: 'black',
    marginLeft: 20,
    fontFamily: 'RedHat-Italic',

  },

  buttonContainer: {
    marginTop: 30,
  },

  tasks: {
    marginLeft: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 13,
  },

  tasksName: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'RedHat-Italic',
  },

  titleDetailTasks: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: '#B7CECE',
    textAlign: 'center',
  },
  image: {
    marginTop: 10,
    width: 100,
    height: 100,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
  },

  preview: {
    marginTop: 10,
    width: 170,
    height: 170,
    borderRadius: 20,
    alignSelf: 'center',
    borderColor: colors.primary,
    borderWidth: 1,
    overflow: 'hidden',
  },

});
