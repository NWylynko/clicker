import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { deviceWidth } from '../../components/isMobile';

export function PreviewPics({ data, setScroll }) {

  const styles = StyleSheet.create({
    image: {
      height: (deviceWidth / 4) - 2.5,
      width: (deviceWidth / 4) - 2.5,
      margin: 1,
      borderRadius: 5,
      backgroundColor: 'pink'
    }
  });

  function Pic({ item }) {
    return (<Image style={styles.image} source={{ uri: item.image }} />);
  }

  function Row({items}) {
    console.log(items)
    return (
      <FlatList
        data={items}
        renderItem={({ item }) => <Pic item={item} />}
        keyExtractor={item => item.id}
        style={{flexDirection: 'row'}}
        // listKey={() => "FL_" + new Date().getTime()}
      />
    )
  }

  return (
    <SafeAreaView style={{ margin: 1, flex: 1 }}>
      <FlatList
        onScroll={() => setScroll(true)}
        data={data.chunk(4)}
        renderItem={({ item }) => <Row items={item} />}
        keyExtractor={() => "FL_" + new Date().getTime()}
      />
    </SafeAreaView>);
}


// https://stackoverflow.com/questions/8495687/split-array-into-chunks
Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var R = [];
    for (var i = 0; i < this.length; i += chunkSize)
      R.push(this.slice(i, i + chunkSize));
    return R;
  }
});