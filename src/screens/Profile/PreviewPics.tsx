import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { deviceWidth } from '../../components/isMobile';
import profileData, { post } from './types';

export function PreviewPics({ data, setScroll } : {data: profileData["posts"], setScroll: React.Dispatch<React.SetStateAction<boolean>>}) {

  const styles = StyleSheet.create({
    image: {
      height: (deviceWidth / 4) - 2.5,
      width: (deviceWidth / 4) - 2.5,
      margin: 1,
      borderRadius: 5,
      backgroundColor: 'pink'
    }
  });

  function Pic({ item } : { item: post}) {
    return (<Image style={styles.image} source={{ uri: item.image }} />);
  }

  function Row({items} : {items: any}) {
    console.log(items)
    return (
      <FlatList
        data={items}
        renderItem={({ item } : { item: post}) => <Pic item={item} />}
        keyExtractor={(item: post) => item.id}
        style={{flexDirection: 'row'}}
        listKey={items[0].id.substring(1, 5) + items[1].id.substring(1, 5)} 
      />
    )
  }

  return (
    <SafeAreaView style={{ margin: 1, flex: 1 }}>
      <FlatList
        onScroll={() => setScroll(true)}
        data={chunk(data, 4)}
        renderItem={(items: profileData["posts"]) => <Row items={items} />}
        keyExtractor={(items: profileData["posts"]) => "FL_" + items[0].id.substring(1, 5) + items[1].id.substring(1, 5)}
      />
    </SafeAreaView>);
}


// https://stackoverflow.com/questions/8495687/split-array-into-chunks

function chunk(array: any[], chunkSize: number) {
  var R = [];
  for (var i = 0; i < array.length; i += chunkSize)
    R.push(array.slice(i, i + chunkSize));
  return R;
}