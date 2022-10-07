/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("")

  const onTxtChange = (val) => {
    setName(val)
  }

  const myOnPressHander = () => {
    if(name.length < 3){
      Alert.alert("Error", "Given name is less than 3 character. Please give long name", [
        {text: "OK", onPress: ()=>{ console.warn("pressed ok")}}, // we can call the function if neeeded
        {text: "Cancel", onPress: ()=>{ console.warn("pressed cancel")}},
        {text: "Skip", onPress: ()=>{ console.warn("pressed skip")}}
      ], {cancelable: true, onDismiss: () => console.warn("pressed dismiss")})
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
