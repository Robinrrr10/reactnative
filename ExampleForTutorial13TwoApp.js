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
  ToastAndroid,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("")

  const onTxtChange = (val) => {
    setName(val)
  }

  const myOnPressHander = () => {
    if(name.length < 3){
     ToastAndroid.show("Give long name", ToastAndroid.SHORT)
     //ToastAndroid.showWithGravity("Give long name", ToastAndroid.LONG, ToastAndroid.TOP)
     //ToastAndroid.showWithGravityAndOffset("Give long name", ToastAndroid.LONG, ToastAndroid.CENTER, 100, 200)
    }
  }

  return (
  <View style={styles.mainView}> 
    <Text>Please enter name:</Text>
    <TextInput style={styles.txt}
    onChangeText={(value) =>  onTxtChange(value)}
    />
    <Button
    title="Submit"
    onPress={myOnPressHander}
    >
    </Button>
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
  }
})


export default App;
