import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Alreadylogin(props) {
  return (
    <TouchableOpacity  style={[styles.container, props.style]}>
      <Text style={styles.button}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    
    minWidth: 50,
    height : 30,
    paddingLeft: 8,
    paddingRight: 8,
    
  },
  button: {
    color: "#5960ff",
    fontSize: 14,
    textDecorationLine: 'underline'
    
  }
});

export default Alreadylogin;
