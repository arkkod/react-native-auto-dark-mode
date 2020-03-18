import React from "react";
import {View,Text,StatusBar,StyleSheet} from "react-native";
import Button from "./components/Button";
import {get_color} from "./consts/colors";

function App(){
  return ( 
    <View style={styles.container}>
      <StatusBar barStyle={get_color("statusBarStyle")} backgroundColor={get_color("statusBarBackground")} />
      <Text style={styles.helloText}>hello world</Text>
      <Button text={"Tıkla Bana"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: get_color("background")
  },
  helloText: {
    fontSize: 30,
    marginBottom: 40,
    color: get_color("text")
  }
})

export default App;