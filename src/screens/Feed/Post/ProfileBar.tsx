import React from 'react';

import { View, StyleSheet, Image, Text } from 'react-native'

export function ProfileBar({data}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.pic.source} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>nwylynko</Text>
      </View>

    </View>
  );
}

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
    margin: 10
  },
  nameContainer: {
    justifyContent: 'center',
    margin: 5
  },
  name: {
    fontSize: 25,
  }
})