import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ text }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo onPress={() => navigation.openDrawer()} name='menu' size={24} color='black' />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginTop: 20, paddingHorizontal: 5, paddingVertical: 10, columnGap: 10 },
});
