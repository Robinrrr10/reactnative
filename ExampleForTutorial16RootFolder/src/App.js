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
  Image,
  ImageBackground
} from 'react-native';
import { MyTopHead } from './customComp/CusHead';
import MyBut, { MyButThree, MyButTwo } from './customComp/CustomButtons';

const App = () => {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [imgUrl, setImgUrl] = useState(require("../asserts/corr_img.png"))

  const onTxtChange = (val) => {
    setName(val)
    setSubmitted(false)
  }

  const myOnPressHander = () => {
    setSubmitted(true)
    if(name.length < 3){
      setImgUrl({uri: "https://www.pngall.com/wp-content/uploads/8/Warning-PNG-Picture.png"})
    }else{
      setImgUrl(require("../asserts/corr_img.png"))
    }
  }

  return (
  //<View style={styles.mainView}> 
  <ImageBackground style={styles.mainView} source={{uri: "https://i.pinimg.com/736x/a8/de/39/a8de3954ad64c056eb6c17acf07a828d.jpg"}}>
     <MyTopHead/>
    <Text style={styles.txtM}>Please enter name:</Text>
    <TextInput style={styles.txt}
    onChangeText={(value) =>  onTxtChange(value)}
    />
    
    <MyBut myOnPress={myOnPressHander} name="login" backColor="#656"></MyBut>
    <MyBut myOnPress={myOnPressHander} name="relogin" backColor="#454">sds</MyBut>
    <MyButTwo>Hey</MyButTwo>

    { 
      submitted ?
    <Image source={imgUrl} style={styles.img}
    resizeMode='stretch'
    blurRadius={3}>
    </Image>
    :
    <Text style={styles.txtM}>Press submit button after giving login id
    </Text>
    }
    </ImageBackground>

 // </View>
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
    margin: 10,
    color: "#729237",
    borderColor: "#628893"
  },
  img: {
    width: 100,
    height: 100
  },
  txtM: {
    color: "#FF7"
  }
})


export default App;
