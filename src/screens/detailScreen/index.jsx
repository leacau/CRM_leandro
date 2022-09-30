import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import { MapPreview } from "../../components/index";
import { database } from "../../constants/firebase/index";
import { styles } from "./styles";

function DetailScreen({ navigation, route }) {
  const { customerId } = route.params;
  const [customer, setCustomer] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCustomer() {
    setLoading(true);
    const docRef = doc(database, "customers", customerId);
    await getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setCustomer({ ...doc.data(), id: doc.id });
      } else {
        console.log("No such document!");
      }
    });
    setLoading(false);
  }

  useEffect(() => {
    getCustomer();
  }, []);

  const nameTitle = customer.category === 1 && <Text style={styles.titleDetail}>Apellido</Text>;
  const nameDet = customer.category === 1 && <Text style={styles.name}>{customer.lastname}</Text>;

  const tasksOfCustomer = { ...customer.tasks };

  const tasks = Object.keys(tasksOfCustomer)
    .map((key) => ({
      id: key,
      ...tasksOfCustomer[key],
    }))
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const keyExtractor = (item, index) => item.id.toString();

  const tasksCompleted = tasks.filter((task) => task.status === "Finalizada");
  const tasksPending = tasks.filter(
    (task) => new Date(task.dueDate) >= new Date() && task.status !== "Finalizada"
  );
  const tasksExpired = tasks.filter(
    (task) => new Date(task.dueDate) < new Date() && task.status === "Pendiente"
  );

  const renderItem = ({ item }) => (
    <View style={styles.tasks}>
      <Text style={styles.tasksName}>
        Vencimiento:
        {item.dueDate}
      </Text>
      <Text style={styles.tasksName}>
        Detalle:
        {item.description}
      </Text>
      <Text style={styles.tasksName}>
        Estado:
        {item.status}
      </Text>
    </View>
  );

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: customer.image }} />
      <MapPreview
        location={{ lat: customer.location.lat, long: customer.location.long }}
        style={styles.preview}>
        <Text style={styles.text}>No has seleccionado una ubicación</Text>
      </MapPreview>
      <ScrollView>
        <View style={styles.detailContainer}>
          {nameTitle}
          {nameDet}
          <Text style={styles.titleDetail}>Nombre</Text>
          <Text style={styles.name}>{customer.name}</Text>
          <Text style={styles.titleDetail}>Teléfono</Text>
          <Text style={styles.name}>{customer.phone}</Text>
          <Text style={styles.titleDetail}>E-mail</Text>
          <Text style={styles.name}>{customer.email}</Text>
          <Text style={styles.titleDetail}>Domicilio</Text>
          <Text style={styles.name}>{customer.address}</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.titleDetail}>Tareas</Text>

          <View>
            <Text style={styles.titleDetailTasks}>Vencidas</Text>
            <FlatList
              data={tasksExpired}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              horizontal
            />
            <Text style={styles.titleDetailTasks}>Pendientes</Text>
            <FlatList
              data={tasksPending}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              horizontal
            />
            <Text style={styles.titleDetailTasks}>Finalizadas</Text>
            <FlatList
              data={tasksCompleted}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default DetailScreen;
