import {
FlatList,
Text,
View,
} from 'react-native';

import { CUSTOMERS } from './../../constants/data/customers';
import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const TasksScreen = ({ navigation }) => {
    const customer = useSelector((state) => state.customers.customers.tasks);
/*     const tasksOfCustomers = customer.filter((customer) => customer.tasks !== '');
    const fomaaaa = {...tasksOfCustomers.tasks}	 */
    console.warn(customer);
        
   /*  const tasks = Object.keys(customer).map((key) => {
        return {
          id: key,
          ...fomaaaa[key],
        };
      }).sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      })
    console.warn(tasks); */
    


    const keyExtractor = (item, index) => item.id.toString();
    const renderItem = ({ item }) => (
            <View style={styles.tasks}>
                <Text style={styles.tasksName }>Vencimiento: {item.tasks.status}</Text>
                <Text style={styles.tasksName}>Detalle: {item.tasks.description}</Text>
                <Text style={styles.tasksName}>Estado: {item.status}</Text>
            </View >
    )    
    
return (
        <View>
            <Text>Tareas</Text>
            <View>
            <FlatList
                data={customer}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
            />
            </View>
        </View> 
        )
}

export default TasksScreen;
