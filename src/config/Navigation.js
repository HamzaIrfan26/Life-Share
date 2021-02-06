import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  
  Image,
} from 'react-native';




const Stack = createStackNavigator();

function Navigation() {
  return (
    <View style={style.container}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </View>
  );
}


const styles = StyleSheet.create({


 container: {
    width : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    backgroundColor: 'pink'
  },


})

export default Navigation;