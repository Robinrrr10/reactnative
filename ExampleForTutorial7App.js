/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//Styles and StyleSheet example

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    //below line is inline style
    <View style={{backgroundColor: "#00ff00", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}> 
      <Text style={{color: "#00F", fontSize: 25, fontStyle: "italic"}}> Hi</Text>
      <View style={styles.viewBody}>
        <Text style={styles.viewText}>Man Man</Text>
      </View>
    </View>
  );
};

//below is the stylesheet. This will be called in above UI elements
const styles = StyleSheet.create({
  viewBody: {
    width: "50%",
    height: "20%",
    backgroundColor: "#335599",
    alignItems: 'center',
    borderWidth: 30,
    borderRadius: 20,
    borderColor: "#825019",
  },
  viewText: {
    color: "#f0f",
    textTransform: "uppercase",
    letterSpacing: 20
    }
})


export default App;
