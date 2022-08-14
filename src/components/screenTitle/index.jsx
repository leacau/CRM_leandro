import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

function ScreenTitle({ title }) {
  return (
    <View style={styles.title}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
}

export default ScreenTitle;
