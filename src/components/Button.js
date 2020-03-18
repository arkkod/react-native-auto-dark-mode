import React from "react";
import {TouchableOpacity,Text,StyleSheet} from "react-native";
import {get_color, colors} from "../consts/colors";

function Button({text}){
  return ( 
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
    height: 50,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark.buttonBackground
  },
  buttonText: {
    fontSize: 16,
    color: colors.dark.buttonText
  }
})

export default Button;