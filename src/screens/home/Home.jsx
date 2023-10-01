import { Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import { FONTS } from '../../constant/fonts';

export default function Home() {
  return (
    <>
      <Header text='Home' />
      <View>
        <Text style={{ fontFamily: FONTS.INTER_BLACK, fontSize: 20 }}>Home</Text>
      </View>
    </>
  );
}
