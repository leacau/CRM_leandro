import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

import { CUSTOMERS } from "../../constants/data/customers";
import { CustomerItem } from "../../components";
import { parseDateToEqual } from "../../utils/function";
import { styles } from "./styles";

function TasksScreen({ navigation }) {
  const tasks = [];
  const tasksOfCustomer = CUSTOMERS.filter((customer) => customer.tasks.length > 0);
  const [checked, setChecked] = useState("Pendiente");

  tasksOfCustomer.forEach((customer) => {
    if (customer.tasks.length > 0) {
      for (let i = 0; i < customer.tasks.length; i++) {
        if (customer.tasks[i].status !== "Finalizada") {
          tasks.push({ ...customer.tasks[i], title: "vencido" });
        }
      }
    }
  });

  const todayTasksAlert = () => {
    const todayTasks = tasks.filter(
      (task) => parseDateToEqual(new Date(task.dueDate)) === parseDateToEqual(new Date())
    );
    const keyExtractor = (item, index) => item.id.toString();
    const renderItem = ({ item }) => (
      <View style={styles.tasks}>
        <CustomerItem item={item} onSelected={() => {}}>
          <Text style={styles.tasksName}>
            Vencimiento:
            {item.dueDate}
          </Text>
          <Text style={styles.tasksName}>
            Detalle:
            {item.description}
          </Text>
        </CustomerItem>
      </View>
    );

    if (todayTasks.length > 0) {
      return (
        <View style={styles.tasksContainer}>
          <Text style={styles.tasksAlert}>
            Tenés
            {todayTasks.length} tareas para hoy!
          </Text>
          <FlatList
            data={todayTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))}
            keyExtractor={keyExtractor}
            horizontal
            renderItem={renderItem}
          />
        </View>
      );
    }
    return <Text style={styles.tasksAlert}>No tenés tareas para hoy!</Text>;
  };
  const expiredTasksAlert = () => {
    const expiredTasksAlert = tasks.filter(
      (task) => parseDateToEqual(new Date(task.dueDate)) < parseDateToEqual(new Date())
    );
    const keyExtractor = (item, index) => item.id.toString();
    const renderItem = ({ item }) => (
      <View style={styles.tasks}>
        <CustomerItem item={item} onSelected={() => {}}>
          <Text style={styles.tasksName}>
            npm Vencimiento:
            {item.dueDate}
          </Text>
          <Text style={styles.tasksName}>
            Detalle:
            {item.description}
          </Text>
        </CustomerItem>
      </View>
    );
    if (expiredTasksAlert.length > 0) {
      return (
        <View style={styles.tasksContainer}>
          <Text style={styles.tasksAlert}>
            Tenés
            {expiredTasksAlert.length} tareas vencidas!
          </Text>
          <FlatList
            data={expiredTasksAlert.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
          />
        </View>
      );
    }
    return <Text style={styles.tasksAlert}>No tenés tareas vencidas!</Text>;
  };

  const futureTasksAlert = () => {
    const futureTasksAlert = tasks.filter(
      (task) => parseDateToEqual(new Date(task.dueDate)) > parseDateToEqual(new Date())
    );
    const keyExtractor = (item, index) => item.id.toString();
    const renderItem = ({ item }) => (
      <View style={styles.tasks}>
        <CustomerItem item={item} onSelected={() => {}}>
          <Text style={styles.tasksName}>
            Vencimiento:
            {item.dueDate}
          </Text>
          <Text style={styles.tasksName}>
            Detalle:
            {item.description}
          </Text>
        </CustomerItem>
      </View>
    );
    if (futureTasksAlert.length > 0) {
      return (
        <View>
          <Text style={styles.tasksAlert}>
            Tenés
            {futureTasksAlert.length} tareas a futuro!
          </Text>
          <FlatList
            data={futureTasksAlert.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
          />
        </View>
      );
    }
    return <Text style={styles.tasksAlert}>No tenés tareas a futuro!</Text>;
  };

  return (
    <ScrollView style={styles.container}>
      {expiredTasksAlert()}
      {todayTasksAlert()}
      {futureTasksAlert()}
    </ScrollView>
  );
}

export default TasksScreen;
