import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
 
  Image,
} from 'react-native';


import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Navigation from './src/config/Navigation';

function App() {
  return (
    <View style={styles.container}>
      <Navigation/>

      
    </View>
  );
}

const styles = StyleSheet.create({


 

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
  },
 
});

export default App;