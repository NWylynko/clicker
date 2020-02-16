import React, { useState, memo, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { textCutOff } from '../../../utils/textCutOff';

function Description({data}) {

  const [more, setMore] = useState(false)

  useEffect(() => {
    return () => {
      setMore(false)
    };
  }, [])

  return (
    <TouchableOpacity 
      style={styles.container} 
      disabled={more} //once pressed disable to remove the flash that shows up on press
      onPress={() => setMore(true)}
      >
      
      <Text style={styles.text}>{more ? data.text : textCutOff(data.text)}</Text>
    </TouchableOpacity>
  );
}

export default memo(Description)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 18,
  }
})