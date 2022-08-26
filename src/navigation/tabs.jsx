import { StyleSheet, Text, View } from 'react-native';

import AplicationNavigator from './aplication';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import TasksNavigator from './tareas';
import { colors } from '../constants/colors';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabBarIcon: {
      justifyContent: "center",
      alignItems: "center",
    },
    tabBarText: {
      fontFamily: "RedHat-Regular",
      fontSize: 14,
      color: colors.text,
    },
    tabBarTextFocused: {
      fontFamily: "RedHat-Bold",
      fontSize: 14,
      color: colors.text,
    },
  });

const Tabs = () => {
return (
    <BottomTab.Navigator 
    screenOptions={{
        headerShown: false,
      }}>
        <BottomTab.Screen 
        name="home" 
        component={AplicationNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style= {styles.tabBarIcon}>
                <Ionicons name={focused ? "home" : "home-outline"} size={24} color={colors.primary} />
                <Text style={focused ? styles.tabBarTextFocused : styles.tabBarText}>Inicio</Text>
              </View>
            ),
            tabBarShowLabel: false,            
        }}        
        />
        <BottomTab.Screen 
        name="tasks" 
        component={TasksNavigator}
        options={{
            tabBarIcon: ({ focused }) => (
              <View style= {styles.tabBarIcon}>
                <Ionicons name={focused ? "alarm" : "alarm-outline"} size={24} color={colors.primary} />
                <Text style={focused ? styles.tabBarTextFocused : styles.tabBarText}>Tareas</Text>
              </View>
            ),
            tabBarShowLabel: false,            
        }}        
        />
    </BottomTab.Navigator>

)
}

export default Tabs;