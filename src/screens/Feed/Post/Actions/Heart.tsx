import React, { memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

function Heart({ likeState }) {

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

export default memo(Heart)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20
  },
})