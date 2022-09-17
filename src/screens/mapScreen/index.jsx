import MapView, { Marker } from "react-native-maps";
import React, { useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

function MapScreen({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialRegion = {
    latitude: -34.6036844,
    longitude: -58.3815591,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      long: event.nativeEvent.coordinate.longitude,
    });
  };

  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("Nuevo contacto", { mapLocation: selectedLocation });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton} onPress={onHandleSaveLocation}>
          <Ionicons name="md-save-sharp" size={24} color={colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);
  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation}>
      {selectedLocation && (
        <Marker
          title="Ubicación seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.long,
          }}
        />
      )}
    </MapView>
  );
}

export default MapScreen;
