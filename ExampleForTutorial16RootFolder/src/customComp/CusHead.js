import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MyTopHead = (props) => {
    return(
        <View style={styles.mhead}>
            <Text style={styles.tt}>This is top header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mhead: {
        alignItems: 'center',
        width: "100%",
        height: "5%",
        backgroundColor: "#867672",
    },
    tt: {
        fontSize: 20,
        color: "#F0F",
    }
})