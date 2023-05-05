import * as React from 'react';

import {StyleSheet, Text, View} from 'react-native';




export default function App() {
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
 
});
  return (
    <View
      style={styles.container}
     
    >
      <Text style={styles.title}>현지의 어플에 온걸 환영합니다</Text>
      </View>
  );
}