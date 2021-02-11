import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


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



function Home(props) {
  return(
    <ScrollView>
{/* <View style={styles.container1}> */}
<View style={styles.fdhdbnsdfer}>
<Text style={styles.factshead}>Blood Groups</Text>
<Text style={styles.factshead1}>Not all blood is alike.</Text>
<Text style={styles.hjubfjkef}>There are 4 main blood groups (types of blood) – A, B, AB and O. Your blood group is determined by the genes you inherit from your parents.

Each group can be either RhD positive or RhD negative, which means in total there are 8 blood groups.</Text>

<Text style={styles.hjubfjkef}>Group A – has only the A antigen on red cells (and B antibody in the plasma)</Text>
<Text style={styles.hjubfjkef}>Group B – has only the B antigen on red cells (and A antibody in the plasma)</Text>
<Text style={styles.hjubfjkef}>Group AB – has both A and B antigens on red cells (but neither A nor B antibody in the plasma)</Text>
<Text style={styles.hjubfjkef}>Group O – has neither A nor B antigens on red cells (but both A and B antibody are in the plasma)</Text>
<Text style={styles.njjioefjioeko}>There are very specific ways in which blood types must be matched for a safe transfusion. See
the chart below:</Text>

<Image
    source={require("../../assets/images/bloodtypes.png")}
    resizeMode="center"
    style={styles.image}
    ></Image>


<Text style={[styles.factshead ,{fontSize : 22}]}>Select Blood Group Type:</Text>
<View style={styles.hcdipoioju}>
<TouchableOpacity onPress={() => props.navigation.navigate("Bloodo")}
 style={styles.jndtfrdh}>
      <Text style={styles.button}>0+</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => props.navigation.navigate("Blooda")}
 style={styles.jndtfrdh}>
      <Text style={styles.button}>A+</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => props.navigation.navigate("Bloodb")}
 style={styles.jndtfrdh}>
      <Text style={styles.button}>B+</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => props.navigation.navigate("Bloodab")}
 style={styles.jndtfrdh}>
      <Text style={styles.button}>AB+</Text>
</TouchableOpacity>
</View>
</View>
{/* </View> */}

</ScrollView>

  );
};


const styles = StyleSheet.create({

  image: {
    width: '102%',
    height : 200,
  },
  
  hjubfjkef: {
    color: "#121212",
    fontSize: 15,
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'ProductSansRegular',
    color: "#555555",
  },
  njjioefjioeko: {
    color: "#555555",
    fontSize: 15,
    
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    textDecorationLine: 'underline',
    fontFamily: 'ProductSansRegular'
  },

  factshead1:{
    color: "#555555",
    fontSize: 17,
    
    textAlign: 'center',
    
    fontFamily: 'ProductSansRegular',
  },

  factshead: {
    color: "#f2a154",
    fontSize: 35,
    fontFamily: 'Raleway-Bold',
    
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },

  fdhdbnsdfer: {
    width : '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    flexDirection: 'column',
    borderWidth: 0,
    backgroundColor: "#f6f5f5",
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor : '#f4f5db'
  },

  // container1: {
  //   width : '100%',
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent : 'center',
  //   flexDirection: 'column',
  //   backgroundColor : '#f4f5db'
    
  // },
  jndtfrdh: {
    height: 50,
    width: 50,
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
    backgroundColor: "#b68973",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
    marginHorizontal : 10,
  },
  rnhrstnrnjt: {
    color: '#fff',
    fontSize: 18,
    position: 'absolute',
    right: 25,
    
  },
  facebookicon: {
    color: '#f05454',
    fontSize: 22,
    position: 'absolute',
    left: 30
  },
  button: {
    color: "#fff",
    fontSize: 15,
    fontFamily: 'ProductSansBold'
  },
  hcdipoioju: {
    flexDirection :'row',

  }

});

export default Home;