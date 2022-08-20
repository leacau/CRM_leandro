import {
  Button,
  Text,
  View
} from 'react-native';

import React from 'react';
import { styles } from './styles';

const CompanyScreen = ({ onItemSelected, navigation }) => {


  return (

    <View style={styles.container}>
      <Button title="Ir a Detalle de Empresa" onPress={ () => navigation.navigate('Detalle de empresa') } />
      <Text style={styles.title}>Empresas</Text>
    </View>
  );
}

export default CompanyScreen;
