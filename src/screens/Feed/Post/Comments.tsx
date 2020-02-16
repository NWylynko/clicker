import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Comment } from './Comment';

export function Comments({ data }) {

  console.log(data[0])

  return (
    <View style={styles.container}>

      <Comment data={data[0]}/>
      <Comment data={data[1]}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    paddingHorizontal: 15
  },
})