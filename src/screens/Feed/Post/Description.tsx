import React from 'react';

import { View, StyleSheet, Text } from 'react-native'
import { textCutOff } from '../../../utils/textCutOff';

export function Description({data}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textCutOff(data.text)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
  }
})