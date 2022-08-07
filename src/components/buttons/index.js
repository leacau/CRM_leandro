import { Button, View } from 'react-native';

import { styles } from './styles';

function CustomButton({
  titleButton,
  onPressButton,
  colorButton,

}) {
  return (
    <View style={styles.modalButton}>
      <Button title={titleButton} onPress={onPressButton} color={colorButton} />
    </View>

  );
}

export default CustomButton;
