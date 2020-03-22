import React, { memo, useState } from 'react';
import { StyleSheet, Image } from 'react-native'
import DoubleTap from '../../../components/DoubleTap'
import { deviceWidth } from '../../../components/isMobile'

function PostImage({ likeState, data }) {

  const [liked, setLiked] = likeState
  const [loaded, setLoaded] = useState(false)

  const styles = StyleSheet.create({
    image: {
      backgroundColor: data.color,
      width: loaded ? deviceWidth : 0,
      height: loaded ? deviceWidth : 0,
    },
    smallimage: {
      backgroundColor: data.color,
      width: loaded ? 0 : deviceWidth,
      height: loaded ? 0 : deviceWidth
    }
  })

  return (
    <DoubleTap onDoubleTap={() => { setLiked(true) }}>
      <>
        <Image
          source={{ uri: data.high }}
          style={styles.image}
          onLoad={() => setLoaded(true)}
          onError={console.warn}
        />

        <Image
          source={{ uri: data.low }}
          style={styles.smallimage}
        />
      </>
    </DoubleTap>

  );
}

export default memo(PostImage)
