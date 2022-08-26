import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailContainer:{
    justifyContent: 'center',
  },
  titleDetail: {
      fontSize: 16,
      color: 'black',
      marginTop: 10,
      marginLeft:5,
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

  tasks:{
    marginLeft: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 13,
  },

  tasksName:{
    fontSize: 18,
    color: 'black',
    fontFamily: 'RedHat-Italic',
  },


  titleDetailTasks:{
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginLeft:5,
    backgroundColor: '#B7CECE',
    textAlign: 'center',
  }

});
