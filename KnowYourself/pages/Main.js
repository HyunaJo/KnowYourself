import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import {FontAwesome, Ionicons } from '@expo/vector-icons'
import { firestore } from "../firebase";
import Message from './components/Message'
import { StatusBar } from 'expo-status-bar';

const Main = ({route, navigation}) => {
    const name = route.params.name;
    const [messageList, setMessageList] = useState([]);

    firestore.collection("message").get().then((messages)=>{
        // console.log("aaa")
        var newMessageList = [];
        var idx = 0;
        messages.forEach((message)=>{
            if(message.data().user==name){
                const data = message.data()
                newMessageList.push(<Message key={idx} advantage={data.advantage} disadvantage={data.disadvantage}/>)
                idx++;
            }
        })
        if(newMessageList.length!=messageList.length)
            setMessageList(newMessageList);
    });

    

    const onPressRefresh = useCallback(()=>{
        // console.log("click refresh button");
        setMessageList([...messageList]);
    });
    
    const onPressSend = useCallback(()=>{
        navigation.navigate("Send",{name:name});
    });
    
    return (
        <View style={styles.container}>
            <View style={{flex:1, borderBottomColor:"#fff", borderBottomWidth:1, flexDirection:"row", alignItems: 'center', paddingLeft:20, marginTop:30}}>
                <View>
                    <Text style={styles.title}>{name}님에게 필요한 조언</Text>
                </View>
                <View style={{marginLeft:10, top:10}}>
                    <Ionicons name="refresh-circle-outline"  size={35} color="#fff" onPress={onPressRefresh}/>
                </View>
            </View>
            <View style={{flex:7}}>
            <ScrollView>
                {messageList}
            </ScrollView>
            <TouchableOpacity style={styles.floatingButton}>
                    <FontAwesome name="send" size={32} color="white" onPress={onPressSend}/>
                </TouchableOpacity>
            </View>
            <StatusBar style="light"/>
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
        top:20,
        color:"#fff"
    },
    floatingButton: {
      position: "absolute",
      backgroundColor:"#000",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center",
      right: 30,
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
  });

export default Main;