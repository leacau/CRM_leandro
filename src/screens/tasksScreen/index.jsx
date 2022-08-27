import {
Text,
View,
VirtualizedList
} from 'react-native';

import { CUSTOMERS } from './../../constants/data/customers';
import { CustomerItem } from '../../components';
import React from 'react';
import { parseDate } from '../../utils/function';
import { styles } from './styles';

const TasksScreen = ({ navigation }) => {
    const tasks = []
    const tasksOfCustomer = CUSTOMERS.filter(customer => customer.tasks.length > 0);
    const todayTasks = tasks.filter(task => parseDate(new Date(task.dueDate)) === parseDate(new Date()));


    tasksOfCustomer.forEach(customer => {
      if(customer.tasks.length > 0) {
        
        for (let i = 0; i < customer.tasks.length; i++) { 
          if(customer.tasks[i].status !== 'Finalizada') {

            tasks.push(customer.tasks[i]); 
         }}
      }
    } );

    

    const tasksAlert = () => {
      if(todayTasks.length > 0) {
        return (
          <Text>Tenés {todayTasks.length} tareas para hoy!</Text>
        )
      }else {
        return (
          <Text>No tenés tareas para hoy!</Text>
        )
      }
      }

    

    const keyExtractor = (item, index) => item.id.toString();
    const renderItem = ({ item }) => (
      <View style={styles.tasks}>
        <CustomerItem item={item} onSelected={()=>{}}>
          <Text style={ styles.tasksName }>Vencimiento: {item.dueDate}</Text>
          <Text style={ styles.tasksName }>Detalle: {item.description}</Text>
          <Text style={ styles.tasksName }>Estado: {item.status}</Text>
        </CustomerItem>

      </View >
    )
  
  
    
return (
       
            <View>
                <Text style={styles.tasksAlert}>{tasksAlert()}</Text>
                <VirtualizedList
                    data={tasks.sort((a, b) => { return new Date(a.dueDate) - new Date(b.dueDate) })}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    getItemCount={() => tasks.length}
                    getItem={(data, index) => data[index]}
                />
            </View>
         
        )
}

export default TasksScreen;
