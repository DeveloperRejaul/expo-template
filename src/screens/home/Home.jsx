import { Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';

export default function Home() {
  return (
    <>
      <Header text='Home' />
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
}
