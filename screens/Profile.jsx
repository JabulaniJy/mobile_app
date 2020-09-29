import React, { Component } from 'react'
import {  View, StyleSheet, Text, Image, Button } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.Image} source={require('../assets/logo.png')} />
                <View style={styles.HeadTextArea} >
                <Text style={styles.HeadText} >Logged in as: Jabulani Kubeka </Text>
                <Text>Username: Jy</Text>
                </View>  
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'black',
    },
    Image:{
        marginTop:100,
        alignSelf:"center",
        borderRadius:10,
        borderColor:'grey',
        borderWidth:3,
    },
    HeadTextArea:{
      alignItems:'center',
      marginBottom:40,
    },
    HeadText:{
        fontWeight:'bold',
        fontSize:20,
        fontFamily:'monospace',
        borderWidth:1,
      color:'white',
    },
  
  });
