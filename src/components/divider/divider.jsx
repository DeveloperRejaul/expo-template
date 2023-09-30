import { View } from 'react-native';
import React from 'react';

export default function Divider({ color, width, height }) {
  return <View style={{ width, height, backgroundColor: color, alignSelf: 'center' }} />;
}
