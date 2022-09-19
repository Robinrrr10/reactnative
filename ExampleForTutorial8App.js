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
    <View style={styles.main}> 
      <View style={styles.view1}>
        <Text>1</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.view3}>
        <View style={styles.view5}>
          <Text>3</Text>
        </View>
        <View style={styles.view6}>
          <Text>4</Text>
        </View>
        </View>
        <View style={styles.view4}>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#813879",
    alignItems: "stretch",
    justifyContent: 'center'
  },
  view1: {
    flex: 1,
    backgroundColor: "#ff00ff"
  },
  view2: {
    flex: 2,
    backgroundColor: "#ffff00",
    flexDirection: 'row-reverse',
    alignItems: "flex-start",
    justifyContent: 'center'
  },
  view3: {
    flex: 2,
    width: 100,
    height: "100%",
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: 'space-evenly'
  },
  view4: {
    flex: 3,
    width: 100,
    height: 100,
    backgroundColor: "#770077"
  },
  view5: {
    width: 100,
    height: 100,
    backgroundColor: "#775577"
  },
  view6: {
    width: 100,
    height: 100,
    backgroundColor: "#775500"
  }

})


export default App;
