import React from 'react';
import {  View, StyleSheet, Text, Image, Button } from 'react-native';




const Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('News');
  }

  return (
    <View style={styles.container}>
        <Image style={styles.Image} source={require('../assets/images/jy.png')} />
        <View style={styles.HeadTextArea} >
          <Text style={styles.HeadText} >Welcome to Jabulani's</Text>
          <Text>Mobile Platform</Text>
        </View>
        
        <Button  
        color="#841584"
        title='News feed' onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  Image:{
      marginTop:100,
      alignSelf:"center",
      borderRadius:90,
      borderColor:'grey',
      borderWidth:3,
  },
  HeadTextArea:{
    alignItems:'center',
    marginBottom:40,
  },
  HeadText:{
      fontWeight:'bold',
      fontSize:30,
      fontFamily:'monospace',
      borderWidth:1,
    color:'white',
  },

});

export default Home;

