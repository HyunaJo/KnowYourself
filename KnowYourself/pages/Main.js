import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome} from '@expo/vector-icons'

const Main = ({route, navigation}) => {
    const name = route.params.name;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}님에게 필요한 조언</Text>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}></Text>
            </ScrollView>
            <TouchableOpacity style={styles.floatingButton}>
                <FontAwesome  name="send" size={32} color="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontFamily:"HappyGoheungB",
        fontSize:50,
        top:60,
        left:20,
        color:"#fff",
    },
    floatingButton: {
      position: "absolute",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      right: 40,
      bottom: 60,
      borderWidth: 0.7,
      borderRadius:30,
      textAlign:'center',
      borderColor:"#fff",
      color:"#fff"
    },
    text:{
        fontFamily:"HappyGoheungL",
        fontSize:80,
        color:"white",
        marginTop:5,
        textAlign:'center'
    },
    scrollView:{
        
    }
  });

export default Main;