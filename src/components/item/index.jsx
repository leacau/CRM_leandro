import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

function Item({
  inputData, children,
}) {
  return (
    <View style={styles.inputData}>
      <Text>{inputData}</Text>
      {children}
    </View>
  );
}

export default Item;