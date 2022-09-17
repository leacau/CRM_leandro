import * as Location from "expo-location";

import { Alert, Button, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { MapPreview } from "../index";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

function LocationSelector({ onLocation }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [pickedLocation, setPickedLocation] = useState(null);
  const mapLocation = route?.params?.mapLocation;

  const onHandlePickLocation = async () => {
    const isLocationPermissionGranted = await verifyPermissions();

    if (!isLocationPermissionGranted) return;

    navigation.navigate("Maps");
  };

  const onHandlerTakeLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;

    const location = await Location.getCurrentPositionAsync({
      timeout: 5000,
    });

    const { latitude, longitude } = location.coords;
    setPickedLocation({ lat: latitude, long: longitude });
    onLocation({ lat: latitude, long: longitude });
  };

  useEffect(() => {
    if (mapLocation) {
      setPickedLocation(mapLocation);
      onLocation(mapLocation);
    }
  }, [mapLocation]);

  const verifyPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permisos insuficientes", "Necesitamos permisos para acceder a la localización", [
        { text: "Ok" },
      ]);
      return false;
    }
    return true;
  };
  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <Text style={styles.text}>No has seleccionado una ubicación</Text>
      </MapPreview>
      <View style={styles.containerActions}>
        <Button title="Obtener Ubicación" color={colors.primary} onPress={onHandlerTakeLocation} />
        <Button title="Elegir desde el mapa" color={colors.black} onPress={onHandlePickLocation} />
      </View>
    </View>
  );
}

export default LocationSelector;
