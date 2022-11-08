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
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Drawer = createDrawerNavigator();

function ScreenA({navigation}) {

  const ShowMenu = () => {
    navigation.openDrawer() //This is for opening the drawer/slide menu. This will open if it is closed
  }
  const HideMenu = () => {
    navigation.closeDrawer() //This is for closing the drawer/slide menu. This will close if it is open
  }

  const Menu = () => {
    navigation.toggleDrawer()   //This will to both opening and closing drawer/slide menu. This will close if open or open if closed
  }

  return(
    <View>
      <Text>Screen AAAA</Text>
      <Button title="show menu" onPress={ShowMenu}></Button>
      <Text></Text>
      <Button title="Hide menu" onPress={HideMenu}></Button>
      <Text></Text>
      <Button title="click here for menu" onPress={Menu}></Button>
    </View>
  )
}

function ScreenB({navigation}) {
  return(
    <View>
      <Text>Screen BBBBB</Text>
    </View>
  )
}

const App = () => {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator
      //initialRouteName='screen_b'  //Here we will give the screen to show when comming to this page. By default it will show first screen
      
      screenOptions={{
       // headerShown: false  //This is to enable/disable to show header/name of the screen
       // drawerPosition:"right" //Slide/drawer position. It should be in left or right.
       // drawerType: "back"  //This is to control slide when opens. Whether to push the main window or not 
        swipeEdgeWidth: 500,   //This is to control the swipe to open the slide. here even we swipe from center it will open the slide
       //drawerHideStatusBarOnOpen: true  //This is to show/hide the top status bar of phone or not
       //overlayColor: "#782292"   //Color of the main window when slide/drawer opens. when slowly swipe the transparent starts and end
       overlayColor: "#78229290",   //color of main window along with transparent
       //swipeEnabled: false    //this is to enable/disable swipe option
       headerTitleAlign: 'center', //This is to align the header/name of the page
       headerStyle: {
        backgroundColor: "#781226",    //to give header/name background color
       },
       headerTintColor: "#786787",     //to give header name/title color
       headerTitleStyle: {
        fontSize: 25,     //To give font size of header name/title
        fontWeight: 'bold' //to give weight of header name/title
       },
       drawerStyle: {
        backgroundColor: "#585991",   //This is to give drawer/slide background color
        width: 250     //This is to give width of the drawer/slide. we can give in percentage also Eg: width: "25%"
      }
      }}
      
      >
        <Drawer.Screen name="screen_a" component={ScreenA}
        options={{
          title: "Screen A Title", //To give title of screen. If title is not given, it will pick name of the screen
          drawerIcon: ({focused}) => (
            <FontAwesome
            name="home" //name of the icon
            size={focused ? 30 : 20} //size of the icon. when focus show large size. when not focused show smaill
            color="#781292"   //color of the icon
            ></FontAwesome>
          )
        }}
        >
        </Drawer.Screen>
        <Drawer.Screen name="screen_b" component={ScreenB}
        options={{
          title: "Screen B Title",
          drawerIcon: ({focused}) => (
            <FontAwesome
            name="glass"
            size={focused ? 30 : 20}
            color="#781292"
            ></FontAwesome>
          )
        }}
        >
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
