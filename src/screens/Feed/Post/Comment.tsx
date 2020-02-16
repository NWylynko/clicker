import React from 'react';
import { textCutOff } from '../../../utils/textCutOff';
import { View, Text, StyleSheet } from 'react-native';
export function Comment({ data }) {
  return (<View style={styles.line}>
    <Text style={styles.bold}>{data.username} </Text><Text>{textCutOff(data.text)}</Text>
  </View>);
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  bold: {
    fontWeight: 'bold'
  }
})