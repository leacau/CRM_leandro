import {
  Modal,
  Text,
  View,
} from 'react-native';

import React from 'react';
import { styles } from './styles';

function CustomModal({
  children,
  modalTitle,
  modalMessage,
  modalVisible = false,
  animationType,
  onRequestClose = () => null,
  transparent = false,
}) {
  return (
    <Modal
      animationType={animationType}
      visible={modalVisible}
      onRequestClose={onRequestClose}
      transparent={transparent}
    >
      <View style={styles.modalBack}>
        <View style={styles.modalWin} he transparent>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
          </View>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalMessage}>
              {modalMessage}
            </Text>
            {children}
          </View>

        </View>
      </View>
    </Modal>

  );
}

export default CustomModal;
