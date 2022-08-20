/* eslint-disable react/prop-types */
import { TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const CustomInput = ({
  placeholder, value, onChangeText, children, keyboardType = 'default',
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType={keyboardType}
        style={styles.input}
        placeholderTextColor="#cccccc"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {children}
    </View>
  );
}

export default CustomInput;
