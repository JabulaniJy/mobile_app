import React from 'react'
import { View, Text, StyleSheet, ScrollView  } from 'react-native'

export default function NewsStory({navigation}) {
    return (
        < ScrollView >
        <View style={styles.container}>
            <Text style={styles.head} >{navigation.getParam('title')}</Text>

            <Text style={styles.story}>{navigation.getParam('body')}</Text>
        </View>
        </ ScrollView >
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        padding: 30,  
    },

    head:{
        marginBottom:40,
        color:'white',
    },
    story:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
    }

})

