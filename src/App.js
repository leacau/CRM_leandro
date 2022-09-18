import {
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './db';
import { store } from './store';
import { styles } from './styles';
import { useFonts } from 'expo-font';

init()
  .then(() => {
    console.log('Base de datos iniciada');
  })
  .catch((err) => {
    console.log('Fallo en inicio de bas1e de datos');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    'RedHat-Regular': require('../assets/fonts/RedHatDisplay-Regular.ttf'),
    'RedHat-Bold': require('../assets/fonts/RedHatDisplay-Bold.ttf'),
    'RedHat-Light': require('../assets/fonts/RedHatDisplay-Light.ttf'),
    'RedHat-Italic': require('../assets/fonts/RedHatDisplay-Italic.ttf'),
    'RedHat-Black': require('../assets/fonts/RedHatDisplay-Black.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>

  );
}
