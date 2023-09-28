import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { screens } from '../../screens';
import TabScreen from '../tab/Tab';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,
      drawerActiveBackgroundColor: screens.drawer?.activeBg,
      drawerInactiveBackgroundColor: screens.drawer?.inActiveBg,
      drawerActiveTintColor: screens.drawer?.activeIcon,
      drawerInactiveTintColor: screens.drawer?.inActiveIcon,
    }}
    >
      <Drawer.Screen
        options={{ drawerIcon: screens.drawer?.mainIcon, drawerLabel: screens.drawer?.mainLabel }}
        name='Home'
        component={TabScreen}
      />
      {screens.drawer.component.map((items, index) => (
        <Drawer.Screen
          key={Math.random()}
          name={screens.drawer.name[index]}
          component={items.com}
          options={{ drawerLabel: items.label, drawerIcon: items.icon }}
        />
      )) }
    </Drawer.Navigator>
  );
}
