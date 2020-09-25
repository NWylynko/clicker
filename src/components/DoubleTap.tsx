import React, { useState } from 'react';
import { TouchableHighlight, GestureResponderEvent, View } from 'react-native'

interface DoubleTap {
  children: React.ReactNode,
  onDoubleTap: (event: GestureResponderEvent) => void
}

export default function DoubleTap({ children, onDoubleTap }: DoubleTap): JSX.Element {

  const [lastPress, setLastPress] = useState(0)

  const onPress = (event: GestureResponderEvent) => {
    var delta = new Date().getTime() - lastPress;

    if (delta < 200) {
      onDoubleTap(event)
    }

    setLastPress(new Date().getTime())

  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        {children}
      </View>
    </TouchableHighlight>

  );
}