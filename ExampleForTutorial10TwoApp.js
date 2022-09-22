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
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const myNestedList = [
    {
      title: "title 1",
      data: ["1 item 1", "1 item 2", "1 item 3"]
    },
    {
      title: "title 2",
      data: ["2 item 1", "2 item 2", "2 item 3"]
    },
    {
      title: "title 3",
      data: ["3 item 1", "3 item 2", "3 item 3"]
    },
    {
      title: "title 4",
      data: ["4 item 1", "4 item 2", "4 item 3"]
    }
  ]

  return (
      <SectionList
      keyExtractor={(item, index) => index.toString()}
      sections={myNestedList}
      renderItem={({item}) => (
        <Text style={styles.tt}>{item}</Text>
      )
    }
    renderSectionHeader={({section}) => (
      <View style={styles.llview}>
        <Text style={styles.tt}>{section.title}</Text>
      </View>
    )}
    >
  </SectionList>
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
