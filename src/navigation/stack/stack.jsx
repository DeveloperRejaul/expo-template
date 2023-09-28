import React from 'react';
import { screens } from '../../screens';

export default function StackScreen(Stack) {
  return (
    <Stack.Navigator screenOption={{ headerShown: false }}>
      {screens.main.name.map((name, index) => (
        <Stack.Screen
          key={Math.random()}
          name={name}
          component={screens.main.component[index]}
        />
      ))}
    </Stack.Navigator>
  );
}
