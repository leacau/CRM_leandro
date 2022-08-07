import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  itemList: {
    backgroundColor: '#fff',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#7D8CC4',
    padding: 8,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

  },
  imgItem: {
    width: 100,
    height: 100,
    color: 'black',
  },

  name: {
    fontSize: 18,
    color: '#ffffff',
  },
  mail: {
    fontSize: 12,
  },
  delete: {
    color: '#fff',
    fontSize: 18,
  },
  modalButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  modalItem: {
    fontSize: 15,
    color: '#7D8CC4',
    fontWeight: 'bold',
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#99EDCC',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 4.22,

    elevation: 6,

  },

  title: {
    backgroundColor: '#9AC4F8',
    marginTop: 30,
    padding: 15,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#9A275A',
    fontWeight: 'bold',
  },
  input: {
    width: '70%',
    borderBottomWidth: 1,
    borderBottomColor: '#7D8CC4',
    marginLeft: 10,

  },

  inputData: {
    marginTop: 10,
    width: '60%',
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',

  },

});