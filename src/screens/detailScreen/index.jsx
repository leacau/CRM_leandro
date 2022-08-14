import {
  Button,
  Text,
  View
} from 'react-native';

import React from 'react';
import { styles } from './styles';

const DetailScreen = ({item, onItemSelected}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.titleDetail}>Apellido</Text>
        <Text style={styles.name}>{item.apellido}</Text>
        <Text style={styles.titleDetail}>Nombre</Text>
        <Text style={styles.name}>{item.nombre}</Text>
        <Text style={styles.titleDetail}>Teléfono</Text>
        <Text style={styles.name}>{item.telefono}</Text>
        <Text style={styles.titleDetail}>E-mail</Text>
        <Text style={styles.name}>{item.mail}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Volver" onPress={() => onItemSelected('')} />
      </View> 
      </View>
  );
}

export default DetailScreen;
