import { Image, View } from "react-native";

import React from "react";
import { URL_MAPS } from "../../utils/maps";
import { styles } from "./styles";

function MapPreview({ children, location, style }) {
  const { lat, long } = location || {};
  const mapPreviewUrl = URL_MAPS(lat, long);

  return (
    <View style={{ ...styles.container, ...style }}>
      {location ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} /> : children}
    </View>
  );
}

export default MapPreview;
