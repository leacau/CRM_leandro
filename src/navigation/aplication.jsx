import {
  ContactScreen,
  DetailScreen,
  LaunchScreen,
  MapScreen,
  NewContactScreen,
} from "../screens/index";

import React from "react";
import { colors } from "../constants/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AplicationNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.textLight,
        headerTitleStyle: {
          fontFamily: "RedHat-Bold",
        },
      }}>
      <Stack.Screen
        name="Contactos"
        component={ContactScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
        })}
      />
      <Stack.Screen name="Detalle de contacto" component={DetailScreen} />
      <Stack.Screen name="Nuevo contacto" component={NewContactScreen} />
      <Stack.Screen name="Maps" component={MapScreen} />
      <Stack.Screen name="Inicio" component={LaunchScreen} />
    </Stack.Navigator>
  );
}

export default AplicationNavigator;
