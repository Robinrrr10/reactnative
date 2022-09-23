/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [id, setId] = useState("")

  return (
  <View style={styles.mainView}>
    <Text style={styles.tt}>Please enter your id:</Text>
    <TextInput placeholder='login Id' style={styles.ti}
      keyboardType='decimal-pad'
      maxLength={5}
      //secureTextEntry
      //multiline
      //editable={false}
      onChangeText={(text)=>setId(text)}
    />
    <Text style={styles.ttv}>Id is: {id}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#880089",
    alignItems: "center"
  },
  tt: {
    fontSize: 20
  },
  ti: {
    width: "70%",
    borderWidth: 1,
    backgroundColor: "#789122",
    borderColor: "#ffffff",
    borderRadius: 30,
    textAlign: "center",
    fontSize: 23
  },
  ttv: {
    fontSize: 25,
    color: "#FFF"
  },
})


export default App;
