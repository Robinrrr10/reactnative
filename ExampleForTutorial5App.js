//File name is App.js For tutorial 5
//------------------------------------

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.maintext}> Hello world</Text>
      <Button title="Open youtube channal" onPress={() => {Linking.openURL('https://www.youtube.com/watch?v=1lg_IXtjles&list=PL8kfZyp--gEXs4YsSLtB3KqDtdOFHMjWZ&index=6')}}></Button>
      <Text style={styles.maintext}> Hey</Text>
      <Button title="Open Google search" onPress={() => {Linking.openURL('https://www.google.com')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#551181",
    alignItems: 'center',
    justifyContent: 'center'
  },
  maintext: {
    color: "#ffffff",
    fontSize: 30,
    fontStyle: 'italic',
    margin: 20
  }
});

export default App;
