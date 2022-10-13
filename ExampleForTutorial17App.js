/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  
  const onPressHandler = () => {
    navigation.navigate("Screen_B")
    //navigation.replace("Screen_B")
  }

  return(
    <View style={styles.main}>
      <Text>Currently in Screen A</Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text style={styles.textBut}>Go to screen B</Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_A")
    //navigation.goBack();
  }

  return(
    <View style={styles.main}>
      <Text>Currently in Screen B</Text>
      <Pressable
      onPress={onPressHandler}
      >
        <Text style={styles.textBut}>Go to screen A</Text>
      </Pressable>
    </View>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      //screenOptions={{
        //header: () => null //This will remove header in all pages
      //}}
      >
        <Stack.Screen name="Screen_A" component={ScreenA} 
       // options={{
         // header: () => null //this will delete the header name Screen_A. By default, it will show as header
        //}}
        />
        <Stack.Screen name="Screen_B" component={ScreenB} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
main: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
},
textBut: {
  backgroundColor: "#55f",
  fontSize: 17
}
})

export default App;
