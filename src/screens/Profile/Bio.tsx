import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { textCutOff } from '../../utils/textCutOff';

export function Bio({ text }) {

  const [show, setShow] = useState(false);

  const styles = StyleSheet.create({
    bio: {
      marginHorizontal: 15
    }
  });

  return (
    <TouchableOpacity onPress={() => setShow(true)} disabled={show}>
      <Text style={styles.bio}>{show ? text : textCutOff(text, 100)}</Text>
    </TouchableOpacity>
  );
}
