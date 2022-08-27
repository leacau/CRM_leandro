import {
  FlatList,
  Text,
  View,
} from 'react-native';

import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const DetailScreen = ({ navigation }) => {

  const customer = useSelector((state) => state.customers.selected);

  const nameTitle = customer.category === 1 && <Text style={styles.titleDetail}>Apellido</Text>;
  const nameDet = customer.category === 1 && <Text style={styles.name}>{customer.lastname}</Text>;
  const tasksOfCustomer = {...customer.tasks};

  const tasks = Object.keys(tasksOfCustomer).map((key) => {
    return {
      id: key,
      ...tasksOfCustomer[key],
    };
  }).sort((a, b) => {
    return new Date(a.dueDate) - new Date(b.dueDate);
  })
 
 
  const keyExtractor = (item, index) => item.id.toString();

  const tasksCompleted = tasks.filter((task) => task.status === 'Finalizada');
  const tasksPending = tasks.filter((task) => new Date (task.dueDate) >= new Date() && task.status !== 'Finalizada');
  const tasksExpired = tasks.filter((task) => new Date(task.dueDate) < new Date() && task.status === 'Pendiente');

  
  const renderItem = ({ item }) => (
    <View style={styles.tasks}>
      <Text style={ styles.tasksName }>Vencimiento: {item.dueDate}</Text>
      <Text style={styles.tasksName}>Detalle: {item.description}</Text>
      <Text style={styles.tasksName}>Estado: {item.status}</Text>
    </View >
    )



  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        {nameTitle}
        {nameDet}    
        <Text style={styles.titleDetail}>Nombre</Text>
        <Text style={styles.name}>{customer.name}</Text>
        <Text style={styles.titleDetail}>Teléfono</Text>
        <Text style={styles.name}>{customer.phone}</Text>
        <Text style={styles.titleDetail}>E-mail</Text>
        <Text style={styles.name}>{customer.email}</Text>
      </View>
      <View style={styles.detailContainer}>
        
        <Text style={styles.titleDetail}>Tareas</Text>

            <View>
              <Text style={styles.titleDetailTasks}>Vencidas</Text>
              <FlatList
                data={tasksExpired}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />     
              <Text style={styles.titleDetailTasks}>Pendientes</Text>
              <FlatList
                data={tasksPending}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
              <Text style={styles.titleDetailTasks}>Finalizadas</Text>
              <FlatList
                data={tasksCompleted}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
              />
            </View>

      </View>
    </View>  
 
 );
}

export default DetailScreen;
