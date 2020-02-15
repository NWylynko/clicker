import React from 'react';
import { Text, View } from 'react-native';
import { ProfileBar } from './Post/ProfileBar';
import { Image } from './Post/Image';
import { Actions } from './Post/Actions';
import { LikedBy } from './Post/LikedBy';
import { Comments } from './Post/Comments';

export default function Post() {
  return (
    <>
      <ProfileBar />
      <Image />
      <Actions />
      <LikedBy />
      <Comments />
    </>
  )
}

