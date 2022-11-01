import { View, Text } from 'react-native';
import React from 'react';
import style from '../style/style';

export default function Footer() {
  return (
    <View style={style.footer}>
      <Text style={style.author}>Author: Katariina Järvenpää</Text>
    </View>
  )
}