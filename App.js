import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Bloodo from './src/screens/typesblood/Bloodo';

import Bloodab from './src/screens/typesblood/Bloodab';
import Bloodb from './src/screens/typesblood/Bloodb';
import Blooda from './src/screens/typesblood/Blooda';
import Detailssignup from './src/screens/Detailssignup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';





const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>

 
      <Stack.Screen options={{ title: 'Login', headerTitleStyle: { fontFamily: 'Raleway-Bold' } }} name="Login" component={Login} />
      <Stack.Screen options={{ title: 'Enter Your Details', headerTitleStyle: { fontFamily: 'Raleway-Bold' } }} name="Detailssignup" component={Detailssignup} />
      <Stack.Screen options={{ title: 'Home', headerTitleStyle: { fontFamily: 'Raleway-Bold' }}} name="Home" component={Home} />
      <Stack.Screen options={{ title: 'Blood O+ List', headerTitleStyle: { fontFamily: 'Raleway-Bold' } }}  name="Bloodo" component={Bloodo} />
      <Stack.Screen options={{ title: 'Blood A+ List:',headerTitleStyle: { fontFamily: 'Raleway-Bold' }}} name="Blooda" component={Blooda} />
      <Stack.Screen options={{ title: 'Blood AB+ List:',headerTitleStyle: { fontFamily: 'Raleway-Bold' }}} name="Bloodab" component={Bloodab} />
      <Stack.Screen options={{ title: 'Blood B+ List:',headerTitleStyle: { fontFamily: 'Raleway-Bold' }}} name="Bloodb" component={Bloodb} />


      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}


const styles = StyleSheet.create({


 

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
  },

  dmwkisfbe:{
    fontSize: 25,
    marginLeft: 15
  },
 
});

export default App;
