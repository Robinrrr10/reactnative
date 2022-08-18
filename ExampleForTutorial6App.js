//Example for tutorial 6 for file App.js
//Purpose of useState


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
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('Raja')
  const [student, setStudent] = useState({sname: 'Aman', sage: 26})
  const [male, isMale] = useState(true)

  const changeName = () => {
    setName('Shuraj')
  }

  const changeStudentDetail = () => {
    setStudent({sname: 'Bala', sage: 31})
  }

  const changeNameAndGender = () => {
    setName('Shuraj')
    isMale(false)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.maintext}> Hi {name}</Text>
      <Button title="Change name" onPress={changeName}></Button>
      <Text style={styles.maintext}> Student name is {student.sname} and age is {student.sage}</Text>
      <Button title="Change student" onPress={changeStudentDetail}></Button>
      <Text style={styles.maintext}> {name} gender is {male? "Male" : "Female"} </Text>
      <Button title="Change name and gender" onPress={changeNameAndGender}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#551181",
    alignItems: 'center',
    justifyContent: 'center'
  },
  maintext: {
    color: "#ffffff",
    fontSize: 30,
    fontStyle: 'italic',
    margin: 20
  }
});

export default App;
