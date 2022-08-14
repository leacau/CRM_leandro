import React, { useState } from 'react';

import DetailScreen from './screens/detailScreen';
import InitialScreen from './screens/initialScreen';
import {
  SafeAreaView,
} from 'react-native';
import { ScreenTitle } from './components';
import { styles } from './styles';
import { useFonts } from 'expo-font';

export default function App() {
  const [itemSelected, setItemSelected] = useState('');


  const onItemSelected = (item) => {
    setItemSelected(item);
  }


  
  let content = <InitialScreen onItemSelected={onItemSelected} />;
  let title = 'Contactos';
  
  if(itemSelected !== '') {
    content = <DetailScreen item={itemSelected} onItemSelected={onItemSelected} />;
    title = 'Detalle de contacto';
  }

  const [loaded] = useFonts({
    'RedHat-Regular': require('../assets/fonts/RedHatDisplay-Regular.ttf'),
    'RedHat-Bold': require('../assets/fonts/RedHatDisplay-Bold.ttf'),
    'RedHat-Light': require('../assets/fonts/RedHatDisplay-Light.ttf'),
    'RedHat-Italic': require('../assets/fonts/RedHatDisplay-Italic.ttf'),
    'RedHat-Black': require('../assets/fonts/RedHatDisplay-Black.ttf'),
  });

  if (!loaded) {
    return null;
  }

  
  return (
    <SafeAreaView style={styles.container} >
      <ScreenTitle title={title} />
      {content}
    </SafeAreaView>

  );
}
