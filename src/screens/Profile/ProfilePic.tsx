import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { deviceWidth } from '../../components/isMobile';

export function ProfilePic({ data, scroll }) {

  const styles = StyleSheet.create({
    ProfilePic: {
      backgroundColor: data.color,
      width: deviceWidth,
      height: scroll ? 300 : deviceWidth,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5
    }
  });

  return (
    <Image source={{ uri: data.source }} style={styles.ProfilePic} />
  );
}
