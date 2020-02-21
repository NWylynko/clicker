import React, { useState, useEffect } from 'react';
import { profileData } from '../testData'
import { PreviewPics } from './Profile/PreviewPics';
import { Bio } from './Profile/Bio';
import { ProfilePic } from './Profile/ProfilePic';
import { NameBar } from './Profile/NameBar';
import { View } from 'react-native';

export default function Profile({route}) {

  const [scroll, setScroll] = useState(false)
  
  useEffect(() => {
    console.log(route.params)
  }, [route.params])

  // console.log(route.params)

  return (
    <View>
      <ProfilePic data={profileData.pic} scroll={scroll} />
      <NameBar data={profileData.user} />
      <Bio text={profileData.bio} />
      <PreviewPics data={profileData.posts} setScroll={setScroll} />
    </View>
  );
}