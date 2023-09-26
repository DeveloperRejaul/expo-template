import React from 'react';
import { screens } from '../../screens';

export default function Auth(Stack) {
  return (
    <Stack.Navigator>
      {screens.auth.name.map((name, index) => <Stack.Screen key={Math.random()} name={name} component={screens.auth.component[index]} />)}
    </Stack.Navigator>
  );
}
