import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function NameBar({ data }) {

  const styles = StyleSheet.create({
    text: {
      fontSize: 32
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 10
    },
    name: {
      flexDirection: 'row',
    },
  });

  return (
    <View style={styles.info}>
      <View style={styles.name}>
        <Text style={styles.text}>{data.first} </Text>
        <Text style={styles.text}>{data.last}</Text>
      </View>
      <Text style={styles.text}>@{data.username}</Text>
    </View>
  );
}
