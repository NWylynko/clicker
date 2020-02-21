import React, { memo } from 'react';

import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'

function ProfileBar({data, navigation}) {

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Profile', {id: data.id})}>
      <Image style={styles.image} source={{uri: data.pic.source}} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{data.username}</Text>
      </View>

    </TouchableOpacity>
  );
}

export default memo(ProfileBar)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row'
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10,
    backgroundColor: 'lightpink',
  },
  nameContainer: {
    justifyContent: 'center',
    margin: 5
  },
  name: {
    fontSize: 25,
  }
})