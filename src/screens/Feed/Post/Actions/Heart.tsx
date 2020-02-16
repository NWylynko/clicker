import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

export function Heart({ likeState }) {

  const [liked, setLiked] = likeState;

  return (
    <TouchableOpacity
      onPress={() => { setLiked(!liked); }}
      style={styles.container}
    >
      <AntDesign
        name={liked ? "heart" : "hearto"}
        color={liked ? "red" : "black"}
        size={40}
      />
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20
  },
})