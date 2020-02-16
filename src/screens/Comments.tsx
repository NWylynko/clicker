import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Comments</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})