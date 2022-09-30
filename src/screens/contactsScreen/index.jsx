import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { CustomerItem } from "../../components/index";
import { database } from "../../constants/firebase";
import { selectCustomer } from "../../store/actions/customers.action";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

function ContactScreen({ navigation }) {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const route = useRoute();
  const [customersBd, setCustomersBd] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const collectioRef = collection(database, "customers");
    const q = query(collectioRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const customers = [];
      querySnapshot.forEach((doc) => {
        customers.push({ ...doc.data(), id: doc.id });
      });
      setCustomersBd(customers);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const customersOfCategory = customersBd.filter(
    (customer) => customer.category === route.params.id
  );

  const onSelected = (item) => {
    dispatch(selectCustomer(item.id));
    navigation.navigate("Detalle de contacto", { name: item.name, customerId: item.id });
  };

  const renderItem = ({ item }) => <CustomerItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item, index) => item.id.toString();

  if (loading) {
    return <Text>Cargando Contactos...</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={customersOfCategory} renderItem={renderItem} keyExtractor={keyExtractor} />

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          navigation.navigate("Nuevo contacto");
        }}>
        <AntDesign name="adduser" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default ContactScreen;
