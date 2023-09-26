import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screens } from '../../screens';

const Tab = createBottomTabNavigator();
export default function TabScreen() {
  return (
    <Tab.Navigator>
      {screens.tab.name.map((name, index) => (
        <Tab.Screen
          key={Math.random()}
          name={name}
          component={screens.tab.component[index]}
        />
      )) }
    </Tab.Navigator>
  );
}
