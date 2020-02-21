import React, { memo } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Comment from './Comments/Comment';

function Comments({ data, navigation, postID }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Comments', { postID })}>

      { data[0] ? <Comment data={data[0]}/> : null }
      { data[0] ? <Comment data={data[1]}/> : null }

    </TouchableOpacity>
  );
}

export default memo(Comments)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
    paddingHorizontal: 15
  },
})