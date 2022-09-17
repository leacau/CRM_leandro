import { Modal, ScrollView, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

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
      transparent={transparent}>
      <ScrollView>
        <View style={styles.modalBack}>
          <View style={styles.modalWin} transparent>
            <View style={styles.modalContentContainer}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
            </View>
            <View style={styles.modalContentContainer}>
              <Text style={styles.modalMessage}>{modalMessage}</Text>
              {children}
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default CustomModal;
