import React, { memo } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function Comment({ data }) {
  return (
  <View style={styles.line}>
    <Image style={styles.image} source={{uri: data.pic.source}} />
    <Text style={styles.bold}>{data.username} </Text><Text>{data.text}</Text>
  </View>
  );
}

export default memo(Comment)

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  bold: {
    fontWeight: 'bold'
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 50,
    margin: 5,
    backgroundColor: 'lightpink',
  },
})