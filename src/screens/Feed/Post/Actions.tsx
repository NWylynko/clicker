import React, { useState, useEffect, memo } from 'react';
import { View, StyleSheet } from 'react-native'
import Bookmark from './Actions/Bookmark';
import Send from './Actions/Send';
import Message from './Actions/Message';
import Heart from './Actions/Heart';
import QuickInput from './Actions/QuickInput';

function Actions({ likeState, bookmarkState }) {

  const [MessageToggle, setMessageToggle] = useState(false)
  const [SendToggle, setSendToggle] = useState(false)

  useEffect(() => {
    return () => {
      setMessageToggle(false)
      setSendToggle(true)
    };
  }, [])

  function NormalView() {
    return (
      <>
        <Message setToggle={setMessageToggle} />
        <Send setToggle={setSendToggle} />
        <Bookmark bookmarkState={bookmarkState} />
      </>
    )
  }

  function SendMessageView() {
    return (
      <>
        <Message setToggle={setMessageToggle} />
        <QuickInput onSubmit={console.log} />
      </>
    )
  }

  function SendToUserView() {
    return (
      <>
        <Send setToggle={setSendToggle} />
        <QuickInput onSubmit={console.log} isMessage={false} />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Heart likeState={likeState} />

      {MessageToggle ? <SendMessageView /> : null}
      {SendToggle ? <SendToUserView /> : null}
      {!(MessageToggle || SendToggle) ? <NormalView /> : null}

    </View>
  );
}

export default memo(Actions)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})