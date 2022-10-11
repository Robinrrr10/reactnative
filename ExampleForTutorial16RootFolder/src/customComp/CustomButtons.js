import React from "react";
import { Button } from "react-native";

const MyBut = (props) => {
    return(
     <Button
        title={props.name}
        onPress={props.myOnPress}
        color={props.backColor}
    >
    </Button>
    )
}

export const MyButTwo = (props) => {
    return(
     <Button
        title={props.children}
    >
    </Button>
    )
}

export const MyButThree = (props) => {
    return(
     <Button
     
    >
    </Button>
    )
}

export default MyBut;