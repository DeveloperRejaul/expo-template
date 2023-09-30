import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { rf, rh, rw } from '../../constant/size';
import { COLORS } from '../../constant/colors';

export default function Header({ text }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo
        onPress={() => navigation.openDrawer()}
        name='menu'
        size={24}
        color={COLORS.gray_800}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row',
    marginTop: rh(3),
    paddingHorizontal: rw(2),
    paddingVertical: rh(1),
    columnGap: rw(2),
    borderBottomWidth: rh(0.1),
    borderBottomColor: COLORS.gray_200,
    marginBottom: rh(1),
    alignItems: 'center',
  },
  text: { fontSize: rf(2), fontWeight: '600', color: COLORS.gray_800 },
});
