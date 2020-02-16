import React, { useState, memo } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

function Message({setToggle}) {

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

export default memo(Message)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})