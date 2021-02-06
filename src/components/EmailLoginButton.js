import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function EmailLoginButton(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>I'll use email or phone</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderColor: "#000",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 5,
    shadowRadius: 10,
    // elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "#000000",
    fontSize: 14
  }
});

export default EmailLoginButton;
