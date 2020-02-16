import React, { memo, useState } from 'react';
import { StyleSheet, Dimensions, Text, View, Image } from 'react-native'
import DoubleTap from '../../../components/DoubleTap'

function PostImage({ likeState, data }) {

  const [liked, setLiked] = likeState

  const styles = StyleSheet.create({
    image: {
      backgroundColor: data.color,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').width
    },
  })

  return (
    <DoubleTap onDoubleTap={() => { setLiked(true) }}>
      <Image
        source={{uri: data.high}}
        style={styles.image}
        defaultSource={{uri: data.low}}
      />

    </DoubleTap>

  );
}

export default memo(PostImage)
