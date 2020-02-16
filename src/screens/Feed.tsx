import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Post from './Feed/Post'

import { TestData } from './testData'

export default function Feed({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TestData}
        renderItem={({ item }) => <Post data={item} navigation={navigation} />}
        keyExtractor={item => item.timestamp.toString()}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})