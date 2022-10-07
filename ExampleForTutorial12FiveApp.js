/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [butName, setButName] = useState("Click")

  const onTxtChange = (val) => {
    setName(val)
    setButName("Click")
    setSubmitted(false)
  }

  const myOnPressHander = () => {
    setSubmitted(!submitted)
    setButName("clicked")
  }

  const myOnLongPressHander = () => {
    setSubmitted(!submitted)
    setButName("Long clicked")
  }

  return (
  <View style={styles.mainView}> 
    <Text>Please enter name:</Text>
    <TextInput style={styles.txt}
    onChangeText={(value) =>  onTxtChange(value)}
    />
    <Pressable style={styles.touOp}
    android_ripple={{color:"#636728"}}
    onPress={myOnPressHander}
    onLongPress={myOnLongPressHander}
    delayLongPress={2000}
    >
    <Text style={styles.teext}>{butName}</Text>
    </Pressable>
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
