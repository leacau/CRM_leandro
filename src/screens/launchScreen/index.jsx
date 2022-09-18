import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CategoryItem } from "../../components";
import { FlatList } from "react-native";
import { selectCategory } from "../../store/category.slice";

function LaunchScreen({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Contactos", {
      name: item.name,
      id: item.id,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item, index) => item.id.toString();

  return <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />;
}

export default LaunchScreen;
