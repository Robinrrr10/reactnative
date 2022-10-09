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
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';

const App = () => {
  const [name, setName] = useState("")
  const [showWarn, setShowWarn] = useState(false)

  const onTxtChange = (val) => {
    setName(val)
  }

  const myOnPressHander = () => {
    if(name.length < 3){
      setShowWarn(true)
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
    <Modal visible={showWarn}
    onRequestClose = {() => {
      setShowWarn(false)
    }}
    transparent //This is for making transparent
    animationType='fade' //This is for giving animation when modal opens
    hardwareAccelerated //this is just for performance. 
    >
      <View  style={styles.mod_warn}>
        <View style={styles.warn_pop}>
          <View style={styles.warn_title}>
            <Text style={styles.warn_title_text}>Warning</Text>
          </View>
          <View style={styles.warn_message}>
            <Text>Give long name</Text>
          </View>
          <Pressable style={styles.warn_button}
          onPress={()=>{
            setShowWarn(false)
          }}
          android_ripple={{color:"#192983"}}
          >
            <Text>Okay</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
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
  mod_warn: {
    flex: 1,
    backgroundColor: "#44444499", //Last two digit has value for transparent. here it is 99
    alignItems: 'center',
    justifyContent: 'center'
  },
  warn_pop: {
    width: 300,
    height: 300,
    backgroundColor: "#fff",
    borderRadius: 20
  },
  warn_title: {
    height: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#672891",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  warn_title_text: {
    fontSize: 20,
    color: "#fff"
  },
  warn_message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  warn_button: {
    height: "20%",
    backgroundColor: "#990000",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
})


export default App;
