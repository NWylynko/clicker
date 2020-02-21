import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function InputComment() {

  const [text, setText] = useState('')

  return (
  <View style={styles.container}>
    <TextInput
        style={styles.input}
        autoFocus={true}
        // onSubmitEditing={() => onSubmit(text)}
        onChangeText={text => setText(text)}
        value={text}
        blurOnSubmit={true}
        enablesReturnKeyAutomatically={true}
        returnKeyType="send"
        placeholder="Leave a nice message..."
      />
  </View>
  );
}

export default memo(InputComment)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5
  },
  input: {
    flex: 1,
    // width: '100%',
    margin: 5,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5
  },
})