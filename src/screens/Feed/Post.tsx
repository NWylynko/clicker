import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ProfileBar } from './Post/ProfileBar';
import Image from './Post/Image';
import { Actions } from './Post/Actions';
import { LikedBy } from './Post/LikedBy';
import { Comments } from './Post/Comments';

export default function Post({data}) {

  const likeState = useState(false)
  const bookmarkState = useState(false)

  return (
    <>
      <ProfileBar data={data.ProfileBar} />
      <Image likeState={likeState} data={data.Image} />
      <Actions likeState={likeState} bookmarkState={bookmarkState}/>
      <LikedBy />
      <Comments />
    </>
  )
}

