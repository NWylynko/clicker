import React, { useState, memo, useEffect } from 'react';
import { TextInput, StyleSheet } from 'react-native';

function QuickInput({ onSubmit }) {

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

export default memo(QuickInput)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5
  },
})