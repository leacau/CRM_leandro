import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

function CustomerItem({ item, onSelected, children }) {
  const name = item.category === 2 || <Text style={styles.name}>{item.lastname}</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerTouchable} onPress={() => onSelected(item)}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          {name}
        </View>
        <View>
          <Text style={styles.mail}>{item.email}</Text>
        </View>
        <View>{children}</View>
      </TouchableOpacity>
    </View>
  );
}

export default CustomerItem;
