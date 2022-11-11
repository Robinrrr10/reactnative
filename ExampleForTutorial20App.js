/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

function ScreenA({navigation, route}) {   //route will accept all the parameter

  const GoToScreenB = () => {
    navigation.navigate("screen_b", {name: "Ram", age: 25})   //To pass parameter and its value for the screen b
  }

  return(
    <View>
      <Text>Screen AAAA</Text>
      <Button title="Go to Screen B" onPress={GoToScreenB}></Button>
      <Text>{route.params?.message}</Text>  
    </View>
    //route.params?.message - above this the direct way to read message. even if the param not exists, this value will be empty
  )
}

function ScreenB({navigation, route}) {   //route is used to accept all paramters of the screen

  const {name, age} = route.params   // route.params is to extract the parameter

  const GoToScreenA = () => {
    navigation.navigate("screen_a", {message: "Hi every one"})  //This is to pass parameter to screen a
  }

  const ChangeName = () => {
    navigation.setParams({name: 'Babu'})  //This is to set the parameter value of the screen
  }

  return(
    <View>
      <Text>Screen BBBBB</Text>
      <Button title="Go to Screen A" onPress={GoToScreenA}></Button>
      <Text>personName {name}, personAge: {age}</Text>
      <Button title="Change name" onPress={ChangeName}></Button>
    </View>
  )
}

const App = () => {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator
      >
        <Drawer.Screen name="screen_a" component={ScreenA}>
        </Drawer.Screen>
        <Drawer.Screen name="screen_b" component={ScreenB}
        initialParams={{name: "mydefaultname", age: 11}}  // To set initial parameter of the screen
        >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
