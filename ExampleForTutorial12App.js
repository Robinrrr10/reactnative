/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const myOnPressHander = () => {
    setSubmitted(!submitted)
  }

  return (
  <View style={styles.mainView}> 
    <Text>Please enter name:</Text>
    <TextInput style={styles.txt}
    onChangeText={(value) => setName(value)}
    />
    <Button title="Click Here"
    onPress={myOnPressHander}
    color="#679111"
    //disabled={false}
    />
    {submitted ?
      <Text>Your name is {name}</Text>
      :
      null
    }
    
  </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center"
  },
  txt: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
    margin: 10
  }
})


export default App;
