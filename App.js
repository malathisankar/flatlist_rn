import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

export default function App() {
  const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lettersMap = letters.map((value,index) => ({letterText:value,key:index}))
  return (
    <View style={styles.container}>
      <FlatList
      data={lettersMap}
      renderItem={(letter) => <Text style={styles.text}>{letter.item.letterText}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom:20
  }
});
