import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { Alert, Button, Image, Text, View } from "react-native";
import React, { useState } from "react";

import { colors } from "../../constants/colors";
import { styles } from "./styles";

function ImageSelector({ onImage }) {
  const [pickedUrl, setPickedUrl] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitamos permisos para acceder a la cámara", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };

  const onHandlerTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada </Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <Button title="Tomar foto" color={colors.primary} onPress={onHandlerTakeImage} />
    </View>
  );
}

export default ImageSelector;
