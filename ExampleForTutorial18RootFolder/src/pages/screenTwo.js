import React from 'react';
import {
    Pressable,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  export default function ScreenB({navigation}) {

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