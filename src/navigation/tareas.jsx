import { DetailScreen, LaunchScreen, TasksScreen } from '../screens/index';

import React from 'react';
import { colors } from '../constants/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const TasksNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Tareas'
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
      name="Tareas" 
      component={TasksScreen} 
      />
      <Stack.Screen name="Detalle de contacto" component={DetailScreen} />
      <Stack.Screen name="Inicio" component={LaunchScreen} />
    </Stack.Navigator>
  );
}

export default TasksNavigator;