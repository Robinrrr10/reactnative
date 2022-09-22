/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    {name: "item 1"},
    {name: "item 2"},
    {name: "item 3"},
    {name: "item 4"},
    {name: "item 5"},
    {name: "item 6"},
    {name: "item 7"},
    {name: "item 8"},
    {name: "item 9"},
    {name: "item 10"},
    {name: "item 11"},
    {name: "item 12"},
    {name: "item 13"},
    {name: "item 14"},
    {name: "item 15"},
    {name: "item 16"},
    {name: "item 17"}
  ])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refrest = () => {
    setIsRefreshing(true);
    let addlen = items.length + 1
    setItems([...items, {name: "item " + addlen}])
    setIsRefreshing(false);
  }

  return (
      <FlatList style={styles.mainView}
      //horizontal - This is for viewing horizontally
      //inverted - this is for reversing the list
      keyExtractor={(item, index) => index.toString()} 
      data={items} 
      renderItem={({item})=> (
          <View style={styles.llview}>
            <Text style={styles.tt}>{item.name}</Text>
          </View>
        ) 
      }
      refreshControl={
        <RefreshControl refreshing={isRefreshing}
        onRefresh={refrest}
        colors={["#ff00ff"]}
        />
      }
      >
      </FlatList>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#110089",
   
  },
  llview: {
    backgroundColor: "#907611",
    margin: 20
  },
  tt: {
    fontSize: 36
  }
})


export default App;
