import React from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { CommentData } from '../testData'
import Comment from './Comments/Comment';
import InputComment from './Comments/InputComment'

export default function Comments({ route }) {
  
  const { postID } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={CommentData}
        renderItem={({ item }) => <Comment data={item}/>}
        keyExtractor={item => item.id}
      />
      <InputComment />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
})