import React, { useState } from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

export default function DoubleTap({ children, onDoubleTap}) {

  const [lastPress, setLastPress] = useState(0)

  function onPress() {
    var delta = new Date().getTime() - lastPress;

    if(delta < 200) {
      onDoubleTap()
    }

    setLastPress(new Date().getTime())

  }

  return (
    <TouchableHighlight onPress={onPress}>
      {children}
    </TouchableHighlight>
    
  );
}