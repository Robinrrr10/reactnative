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
  TouchableHighlight,
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
    <TouchableHighlight style={styles.touOp}
    onPress={myOnPressHander}
    activeOpacity={0.5}
    underlayColor={"#230920"}
    >
    <Text style={styles.teext}>Click</Text>
    </TouchableHighlight>
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
  },
  teext: {
    fontSize: 20
  },
  touOp: {
    width: 150,
    height: 60,
    backgroundColor: "#229933",
    alignItems: "center",
    justifyContent: "center"
  }
})


export default App;
