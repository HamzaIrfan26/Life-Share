import React from 'react';
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import EmailLoginButton from '../components/EmailLoginButton';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  
  Image,
} from 'react-native';





function Login() {
  return (
    
    <View style={styles.container}>
       
    {/* <Image
    source={require("../../assets/images/bloodlogo.png")}
    resizeMode="center"
    style={styles.image}
    ></Image> */}

<Text style={styles.signUp}>Sign Up</Text>
<Text style={styles.signptext}>It's easier to Sign up Now</Text>

      <MaterialButtonViolet 
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>

      <EmailLoginButton
        style={styles.gfhtrh}
      ></EmailLoginButton>

      <View style={styles.rvfenvn}>
<Text style={styles.alreadysigntext}>Already have account?</Text>
<Text style={styles.agnfnfy}>Login</Text>
      </View>



  </View>
  
  );
};


const styles = StyleSheet.create({

  
  rvfenvn: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    width: 300,
    height: 50,
    position: "absolute",
    bottom : 10

  },
  
  container: {
    width : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    
  
  },

  signptext:{
    bottom: 230,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "#121212",
    fontSize: 13,
    height: 50
  },

  agnfnfy: {
    bottom: 20,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "#1687a7",
    fontSize: 15,
    height: 20,
    bottom: 30,
    textDecorationLine: 'underline'
  },

  alreadysigntext:{
    bottom: 20,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "#121212",
    fontSize: 13,
    height: 20,
    bottom: 50,
  },

  signUp: {
    bottom: 270,
    position: "absolute",
    fontFamily: "poppins-600",
    color: "#121212",
    fontSize: 28,
    height: 50
  },

  image: {   
    width: 200,
    height : 200,
    bottom: 150,
  },
 
  materialButtonViolet: {
    height: 42,
    width: 270,
    position: "absolute",
    bottom: 180,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 1,},
    shadowOpacity: 0.60,
    shadowRadius: 6,
    elevation: 4,
},

  gfhtrh: {
    height: 42,
    width: 230,
    position: "absolute",
    bottom: 128,
    borderWidth: 2,
    borderColor: "#b4b4b4",
    borderRadius: 100,
  }

 
});

export default Login;
