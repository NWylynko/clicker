import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

export function Bookmark({bookmarkState}) {

  const [bookmarked, setBookmarked] = bookmarkState;

  return (
    <TouchableOpacity 
      onPress={() => { setBookmarked(!bookmarked); }}
      style={styles.container}
    >
      <FontAwesome 
        name={bookmarked ? "bookmark" : "bookmark-o"} 
        color={bookmarked ? "red" : "black"} 
        size={40} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingRight: 20
  },
})