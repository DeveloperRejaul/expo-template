import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
    >
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
