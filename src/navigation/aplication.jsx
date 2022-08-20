import { CompanyScreen, ContactScreen, DetailScreen, LaunchScreen } from '../screens/index';

import React from 'react';
import { colors } from '../constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const AplicationNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Inicio'
    screenOptions= {{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.textLight,
      headerTitleStyle: {
        fontFamily: 'RedHat-Bold',
      }
        }}
    >
      <Stack.Screen 
      name="Contactos" 
      component={ContactScreen} 
      options={( { route } ) => ({
        headerTitle: route.params.name,
      })}/>
      <Stack.Screen name="Detalle de contacto" component={DetailScreen} />
      <Stack.Screen name="Inicio" component={LaunchScreen} />
      <Stack.Screen name="Empresas" component={CompanyScreen} />
    </Stack.Navigator>
  );
}

export default AplicationNavigator;
