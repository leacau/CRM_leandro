import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalWin: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 150,
    right: 25,
    width: 310,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  modalBack: {
    height: 1200,
    with: 600,
    backgroundColor: 'rgba(209, 209, 209, 0.6)',

  },

  modalTitle: {
    fontSize: 16,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
  },

  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },

});