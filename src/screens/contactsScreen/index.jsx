import { FlatList, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  filteredCustomers,
  newCustomer,
  selectCustomer,
} from "../../store/actions/customers.action";
import { useDispatch, useSelector } from "react-redux";

import { AntDesign } from "@expo/vector-icons";
import { CustomerItem } from "../../components/index";
import { URL_GEOCODING } from "../../utils/maps";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";

function ContactScreen({ navigation }) {
  const [itemList, setItemList] = useState([]);
  const route = useRoute();

  const newItemListBack = route?.params?.newItemList;

  useEffect(() => {
    console.warn("newItemList", newItemListBack);
    if (newItemListBack) {
      setItemList(newItemListBack);
    }
  }, [newItemListBack]);

  const dispatch = useDispatch();

  const categorySelected = useSelector((state) => state.category.selected);
  const customers = useSelector((state) => state.customers.filteredCustomers);
  const onSelected = (item) => {
    dispatch(newCustomer([itemList]));
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

  useEffect(() => {
    dispatch(filteredCustomers(categorySelected.id));
  }, []);

  useEffect(() => {
    setItemList(customers);
  });

  const renderItem = ({ item }) => <CustomerItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={itemList} renderItem={renderItem} keyExtractor={keyExtractor} />

      <TouchableOpacity
        style={styles.buttonAdd}
        onPress={() => {
          navigation.navigate("Nuevo contacto", { itemList });
        }}>
        <AntDesign name="adduser" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export default ContactScreen;
