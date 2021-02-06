import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonViolet(props) {
  return (
    <TouchableOpacity  style={[styles.container, props.style]}>
      <Text style={styles.button}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5960ff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  button: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonViolet;
