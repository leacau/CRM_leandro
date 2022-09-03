import React, { useEffect, useState } from 'react';
import {
ScrollView,
Text,
View,
VirtualizedList,
} from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import { CUSTOMERS } from './../../constants/data/customers';
import { CustomerItem } from '../../components';
import { parseDateToEqual } from '../../utils/function';
import { styles } from './styles';

const TasksScreen = ({ navigation }) => {
    const tasks = []
    const tasksOfCustomer = CUSTOMERS.filter(customer => customer.tasks.length > 0);
    const [checked, setChecked] = useState("Pendiente");   
    

    tasksOfCustomer.forEach(customer => {
      if(customer.tasks.length > 0) {
        
        for (let i = 0; i < customer.tasks.length; i++) { 
          if(customer.tasks[i].status !== 'Finalizada') {
            tasks.push(customer.tasks[i]); 
         }}
      }
    } );

    const todayTasksAlert = () => {
      
      const todayTasks = tasks.filter(task => parseDateToEqual(new Date(task.dueDate)) === parseDateToEqual(new Date()));
      const keyExtractor = (item, index) => item.id.toString();
      const renderItem = ({ item }) => {
      
        return (
        <View style={styles.tasks}>
          <CustomerItem item={item} onSelected={()=>{}}>
            <Text style={ styles.tasksName }>Vencimiento: {item.dueDate}</Text>
            <Text style={ styles.tasksName }>Detalle: {item.description}</Text>
            <Text style={ styles.tasksName }>Estado: {item.status}</Text>
            <BouncyCheckbox
              size={20}
              fillColor="green"
              unfillColor="#FFFFFF"
              text={checked}
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              textStyle={{ fontFamily: 'RedHat-Italic' }}
              onPress={(isChecked: boolean) => (
                isChecked ? setChecked("Finalizada") : setChecked("Pendiente")       
              )}
            />
            <Text style={styles.label}>Do you like React Native?</Text>
          </CustomerItem>
          
        </View >
        )
      }

      if(todayTasks.length > 0) {
        
        return (
          <View>
            <Text style={ styles.tasksAlert }>Tenés {todayTasks.length} tareas para hoy!</Text>
            <View>       
              <VirtualizedList
                  data={todayTasks.sort((a, b) => { return new Date(a.dueDate) - new Date(b.dueDate) })}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  getItemCount={() => todayTasks.length}
                  getItem={(data, index) => data[index]}
              />
            </View>
          </View>
        )
      }else {
        return (
          <Text>No tenés tareas para hoy!</Text>
        )
      }
    }
    const expiredTasksAlert = () => {
      const expiredTasksAlert = tasks.filter(task => parseDateToEqual(new Date(task.dueDate)) < parseDateToEqual(new Date()));
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
      if(expiredTasksAlert.length > 0) {
        return (
          <View>
            <Text style={ styles.tasksAlert }>Tenés {expiredTasksAlert.length} tareas vencidas!</Text>
            <View>       
              <VirtualizedList
                  data={expiredTasksAlert.sort((a, b) => { return new Date(a.dueDate) - new Date(b.dueDate) })}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  getItemCount={() => expiredTasksAlert.length}
                  getItem={(data, index) => data[index]}
              />
            </View>
          </View>
        )
      }else {
        return (
          <Text>No tenés tareas vencidas!</Text>
        )
      }
    }

    const futureTasksAlert = () => {
      const futureTasksAlert = tasks.filter(task => parseDateToEqual(new Date(task.dueDate)) > parseDateToEqual(new Date()));
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
      if(futureTasksAlert.length > 0) {
        return (
          <View>
            <Text style={ styles.tasksAlert }>Tenés {futureTasksAlert.length} tareas a futuro!</Text>
            <View>       
              <VirtualizedList
                  data={futureTasksAlert.sort((a, b) => { return new Date(a.dueDate) - new Date(b.dueDate) })}
                  keyExtractor={keyExtractor}
                  renderItem={renderItem}
                  getItemCount={() => futureTasksAlert.length}
                  getItem={(data, index) => data[index]}
              />
            </View>
          </View>
        )
      }else {
        return (
          <Text>No tenés tareas a futuro!</Text>
        )
      }
    }
 
  
    
return (
       
            <ScrollView>
                {expiredTasksAlert()}
                {todayTasksAlert()}
                {futureTasksAlert()}
            </ScrollView>
         
        )
}

export default TasksScreen;
