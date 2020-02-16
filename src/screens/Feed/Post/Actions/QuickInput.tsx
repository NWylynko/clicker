import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function QuickInput({onSubmit}) {

  const [text, setText] = useState('')

  return (
    <TextInput 
      style={styles.container} 
      autoFocus={true} 
      onSubmitEditing={() => onSubmit(text)}
      onChangeText={text => setText(text)}
      value={text}
      blurOnSubmit={true}
      enablesReturnKeyAutomatically={true}
      returnKeyType="send"
      />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
})