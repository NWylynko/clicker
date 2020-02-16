import React, { useState, memo } from 'react';
import { Text, View } from 'react-native';
import ProfileBar from './Post/ProfileBar';
import Image from './Post/Image';
import Actions from './Post/Actions';
import Description from './Post/Description';
import Comments from './Post/Comments';

function Post({data, navigation}) {

  const likeState = useState(false)
  const bookmarkState = useState(false)

  return (
    <View style={{
      borderBottomColor: 'lightgrey',
      borderBottomWidth: 1,
    }}>
      <ProfileBar data={data.ProfileBar}  />
      <Image likeState={likeState} data={data.Image} />
      <Actions likeState={likeState} bookmarkState={bookmarkState}/>
      <Description data={data.Description}/>
      <Comments data={data.Comments} navigation={navigation}/>
    </View>
  )
}

export default memo(Post)
