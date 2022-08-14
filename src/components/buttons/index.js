/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { Button, View } from 'react-native';

import { styles } from './styles';

function CustomButton({
  titleButton,
  onPressButton,
  colorButton,
  disabledButton = false,

}) {
  return (
    <View style={styles.modalButton}>
      <Button title={titleButton} onPress={onPressButton} color={colorButton} disabled={disabledButton} />
    </View>

  );
}

export default CustomButton;
