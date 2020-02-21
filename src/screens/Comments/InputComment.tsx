import React, { memo } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function InputComment() {
  return (
  <View style={styles.container}>
    <TextInput />
  </View>
  );
}

export default memo(InputComment)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5
  }
})