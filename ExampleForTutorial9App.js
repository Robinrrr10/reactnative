/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    {key: 1, item: "item 1"},
    {key: 2, item: "item 2"},
    {key: 3, item: "item 3"},
    {key: 4, item: "item 4"},
    {key: 5, item: "item 5"},
    {key: 6, item: "item 6"},
    {key: 7, item: "item 7"},
    {key: 8, item: "item 8"},
    {key: 9, item: "item 9"},
    {key: 10, item: "item 10"},
    {key: 11, item: "item 11"},
    {key: 12, item: "item 12"},
    {key: 13, item: "item 13"},
    {key: 14, item: "item 14"},
    {key: 15, item: "item 15"},
    {key: 16, item: "item 16"},
    {key: 17, item: "item 17"}
  ])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const refrest = () => {
    setIsRefreshing(true);
    let addlen = items.length + 1
    setItems([...items, {key: addlen, item: "item " + addlen}])
    setIsRefreshing(false);
  }

  return (
      <ScrollView horizontal={false} style={styles.mainView} refreshControl={<RefreshControl refreshing = {isRefreshing} onRefresh={refrest} color={["#782556"]} />}>
      {
        items.map((object) => {
          return (
            <View style={styles.llview} key={object.key}>
              <Text style={styles.tt}>{object.item}</Text>
            </View>
          )
        })
      }
      </ScrollView>
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
