import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { newCustomer, selectCustomer } from "../../store/actions/customers.action";
import { useDispatch, useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { CustomerItem } from "../../components/index";
import { URL_GEOCODING } from "../../utils/maps";
import { loadCustomers } from "../../store/customer.slice";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

function ContactScreen({ navigation }) {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const route = useRoute();

  const customersOfCategory = customers.filter((customer) => customer.category === route.params.id);

  const onSelected2 = (item) => {
    console.warn("item", item);
    dispatch(selectCustomer(item.id));
    navigation.navigate("Detalle de contacto", { name: item.name, customerId: item.id });
  };

  const onSelected = (item) => {
    dispatch(selectCustomer(item.id));
    navigation.navigate("Detalle de contacto", { name: item.name });
  };

  const geoCoding = async (coords) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.long));
    if (!response.ok) throw new Error("No se ha podido conectar con el servidor");
    try {
      const data = await response.json();
      if (!data.results) throw new Error("No se ha podido encontrar la dirección");

      const address = data.results[0].formatted_address;
      setAddress(address);
      const { lat, lng } = data.results[0].geometry.location;
      setLocation({ lat, long: lng });
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };

  const renderItem = ({ item }) => <CustomerItem item={item} onSelected={onSelected2} />;
  const keyExtractor = (item, index) => item.id.toString();

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
