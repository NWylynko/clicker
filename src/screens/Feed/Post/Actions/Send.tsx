import React, { memo } from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet } from 'react-native';

function Send({ setToggle }) {

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

export default memo(Send)

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})