import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ProfileBar } from './Post/ProfileBar';
import Image from './Post/Image';
import { Actions } from './Post/Actions';
import { Description } from './Post/Description';
import { Comments } from './Post/Comments';

export default function Post({data}) {

  const likeState = useState(false)
  const bookmarkState = useState(false)

  return (
    <>
      <ProfileBar data={data.ProfileBar} />
      <Image likeState={likeState} data={data.Image} />
      <Actions likeState={likeState} bookmarkState={bookmarkState}/>
      <Description data={data.Description}/>
      <Comments data={data.Comments}/>
    </>
  )
}

