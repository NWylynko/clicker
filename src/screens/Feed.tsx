import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import Post from './Feed/Post'

export default function Feed() {

  const TestData = [
    { 
      Image: { 
        source: require('./testdata/pic.png') 
      }, 
      ProfileBar: {
        pic: {
          source: require('./testdata/profile.png') 
        }
      },
      id: '00' 
    }, 
    { 
      Image: { 
        source: require('./testdata/pic.png') 
      }, 
      ProfileBar: {
        pic: {
          source: require('./testdata/profile.png') 
        }
      },
      id: '01' 
    }, { 
      Image: { 
        source: require('./testdata/pic.png') 
      }, 
      ProfileBar: {
        pic: {
          source: require('./testdata/profile.png') 
        }
      },
      id: '02' 
    }]

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
    marginTop: Constants.statusBarHeight
  },
})