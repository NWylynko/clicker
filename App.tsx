import React from 'react'
import Navigation from './src/navigation'
import { isMobile } from './src/components/isMobile'
import { View } from 'react-native'

export default function App() {
  if (isMobile) {
    return (<Navigation />)
  } else {
    return (<View style={{ flex: 1, width: 500, alignSelf: 'center' }}><Navigation /></View>)
  }
  
}