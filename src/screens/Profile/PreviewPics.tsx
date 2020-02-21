import React from 'react';
import { SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { deviceWidth } from '../../components/isMobile';

export function PreviewPics({ data, setScroll }) {

  const styles = StyleSheet.create({
    image: {
      height: deviceWidth / 4,
      width: deviceWidth / 4,
      margin: 1,
      borderRadius: 5,
      backgroundColor: 'pink'
    }
  });

  function Pic({ item }) {
    return (<Image style={styles.image} source={{ uri: item.image }} />);
  }

  return (
    <SafeAreaView style={{ margin: 1, flex: 1 }}>
      <FlatList
        onScroll={() => setScroll(true)}
        data={data}
        renderItem={({ item }) => <Pic item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>);
}
