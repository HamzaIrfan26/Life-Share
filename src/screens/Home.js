import React from 'react';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
} from 'react-native';



function Home() {
  return(
<View style={styles.container}>
<Text style={styles.signUp}>Sign Up</Text>
</View>



  );
};


const styles = StyleSheet.create({

  signUp: {
    bottom: 270,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "#121212",
    fontSize: 28,
    height: 50
  },

  container: {
    width : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
  },

});

export default Home;