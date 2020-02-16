import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

export function Message({setToggle}) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {setToggle(toggle => !toggle)}}
    >
      <MaterialCommunityIcons 
        name="message-outline" 
        color="black" 
        size={40} 
      />
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})