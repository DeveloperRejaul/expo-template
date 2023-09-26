import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { screens } from '../../screens';
import TabScreen from '../tab/Tab';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='tab' component={TabScreen} />
      {screens.drawer.name.map((name, index) => (
        <Drawer.Screen
          key={Math.random()}
          name={name}
          component={screens.drawer.component[index]}
        />
      )) }
    </Drawer.Navigator>
  );
}
