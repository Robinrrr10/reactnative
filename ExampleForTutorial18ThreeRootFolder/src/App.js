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

import ScreenA from './pages/screenOne';
import ScreenB from './pages/screenTwo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if(route.name==='Screen_A'){
            iconName='cloud' //refer https://oblador.github.io/react-native-vector-icons for icon name
            size = focused ? 30 : 20; //this is for changing the size of icon when focused/clicked
            color = focused ? "#F0F" : "#888"; //This is to change the color when focused/clicked
          }else if(route.name==='Screen_B'){
            iconName='star'
            size = focused ? 30 : 20;
            color = focused ? "#F0F" : "#888";
          }
          return (
            <FontAwesome5
              name={iconName} //Here we are giving the icon name
              size={size}  //Here we are giving the size of the icon
              color={color}  //Here we are giving the color of the icon
            />
          )
        }
      })}
      tabBarOptions={{ //Currently this is deprecated
        activeTintColor: "#0F2", //to color active tab label
        inactiveTintColor: "#F87", //to color inactive tab label
        activeBackgroundColor: "#117733", //To add background color of the tab which is active
        inactiveBackgroundColor: "#667788", //To add background color of the tab which is inactive
        showLabel: true,   //To enable or disable the label of the tab
        labelStyle: {fontSize: 17}  //To style the label of the tab
      }}
      activeColor="#FF9210"
      inactiveColor="#888888"
      barStyle={{backgroundColor: "#552352"}}
      >
        <Tab.Screen name="Screen_A" component={ScreenA} 
        options={{tabBarBadge: 3}} //This is for adding batch in button/icon. Eg: this number will show in top of the icon and highlighted. We can use dynamic value by passing as variable
        //options={{headerShown: false}} //This is disable header
        />
        <Tab.Screen name="Screen_B" component={ScreenB} 
        //options={{headerShown: true}}
        />
      </Tab.Navigator>
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
