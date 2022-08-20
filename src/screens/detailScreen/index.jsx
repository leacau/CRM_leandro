import {
  Text,
  View,
} from 'react-native';

import { CUSTOMERS } from '../../constants/data/customers'
import React from 'react';
import { styles } from './styles';

const DetailScreen = ({ navigation, route }) => {

  const { customerId } = route.params;


  const customer = CUSTOMERS.find(customer => customer.id === customerId);
  console.warn(customer);
  
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.titleDetail}>Apellido</Text>
        <Text style={styles.name}>{customer.lastname}</Text>
        <Text style={styles.titleDetail}>Nombre</Text>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.titleDetail}>Teléfono</Text>
        <Text style={styles.name}>{customer.phone}</Text>
        <Text style={styles.titleDetail}>E-mail</Text>
        <Text style={styles.name}>{customer.email}</Text>
      </View>
    </View>
  );
}

export default DetailScreen;
