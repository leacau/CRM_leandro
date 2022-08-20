import React, { useState } from 'react';

import { CATEGORIES } from '../../constants/data/categories';
import { CategoryItem } from '../../components';
import {
  FlatList,
} from 'react-native';
import { styles } from './styles';

const LaunchScreen = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Contactos', {
      categoryId: item.id,
      name: item.name,
    });
  };

  const renderItem = ({ item }) => (
    <CategoryItem item={item} onSelected={onSelected} />
  )
  const keyExtractor = (item, index) => item.id.toString();

  return (
    <FlatList
    data={CATEGORIES}
    renderItem= {renderItem}
    keyExtractor={keyExtractor}
    />
  )
}

export default LaunchScreen;

