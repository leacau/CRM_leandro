import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CustomerItem = ({ item, onSelected }) => {

    return (
        <View style={styles.container}>
        <TouchableOpacity 
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
        >
        <View >
            <Text style={styles.name}>{item.name}</Text> 
            <Text style={styles.name}>{item.lastname}</Text> 
        </View>
        <View>
            <Text style={styles.mail}>{item.email}</Text>
        </View>
        </TouchableOpacity>
        </View>
    );
}

export default CustomerItem;