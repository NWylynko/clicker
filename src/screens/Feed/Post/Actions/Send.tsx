import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

export function Send({ setToggle }) {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {setToggle(toggle => !toggle)}}
    >
      <Feather 
        name="send" 
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