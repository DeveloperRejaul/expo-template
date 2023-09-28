import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native';
import setting from '../../setting.json';
import Auth from './auth/Auth';
import Main from './main/Main';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {!setting.auth ? <>{Main(Stack)}</> : isLogin ? <>{Main(Stack)}</> : <>{Auth(Stack)}</> }
    </NavigationContainer>
  );
}
