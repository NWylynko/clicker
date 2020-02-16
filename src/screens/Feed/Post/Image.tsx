import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import DoubleTap from '../../../components/DoubleTap'

export default function ({ likeState, data }) {

  const [liked, setLiked] = likeState

  return (
    <DoubleTap onDoubleTap={() => {setLiked(true)}}>
      <Image style={styles.image} source={data.source}/>
    </DoubleTap>
    
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  }
})