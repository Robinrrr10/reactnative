/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <View style={mystyle}> 
      <Text>Hi hi</Text>
    </View>
  );
};

const styles1 = StyleSheet.create({
  body: {
    backgroundColor: "#813879"
  }
})

const styles2 = StyleSheet.create({
  mybody: {
    width: "100%",
    height: "50%",
  }
})

const mystyle = StyleSheet.compose(styles1.body, styles2.mybody)


export default App;
