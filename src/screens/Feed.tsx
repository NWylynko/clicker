import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Post from './Feed/Post'

import { TestData } from './testData'

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TestData}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1
  },
})