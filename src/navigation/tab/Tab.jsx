import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { screens } from '../../screens';

const Tab = createBottomTabNavigator();
export default function TabScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {screens.tab.component.map((items, index) => (
        <Tab.Screen
          key={Math.random()}
          name={screens.tab.name[index]}
          component={items.com}
          options={{ tabBarIcon: items.icon, tabBarLabel: items.label}}
        />
      )) }
    </Tab.Navigator>
  );
}
