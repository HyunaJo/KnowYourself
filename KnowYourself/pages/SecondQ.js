import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SecondQ = ({route, navigation}) => {
    const name = route.params.name;

    const onPressYes = useCallback(()=>{
        switch(name){
            case "서지완":
            case "박채원":
            case "김수연":
                navigation.reset({routes: [{name: "ThirdQ", params:{name:name,cnt:0}}]})
                break;
            default:
                navigation.reset({routes: [{name: "RetryQ", params:{name:name, questionNum:2}}]})
                break;
        }
    });

    const onPressNo = useCallback(()=>{
        switch(name){
            case "서지완":
            case "박채원":
            case "김수연":
                navigation.reset({routes: [{name: "RetryQ", params:{name:name, questionNum:2}}]})
                break;
            default:
                navigation.reset({routes: [{name: "ThirdQ", params:{name:name,cnt:0}}]})
                break;
        }
    });
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>당신의 드립력은 괜찮습니까?</Text>
            <TouchableOpacity>
                <Text style={styles.button} onPress={onPressYes}>네</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button} onPress={onPressNo}>아니요</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontFamily:"HappyGoheungB",
        fontSize:50,
        color:"#fff",
    },
    button: {
      fontFamily:"HappyGoheungL",
      margin:10,
      fontSize:45,
      height: 40,
      width: 160,
      borderWidth: 0.7,
      borderRadius:10,
      textAlign:'center',
      borderColor:"#fff",
      color:"#fff"
    },
    text:{
        fontFamily:"HappyGoheungL",
        fontSize:48,
        color:"white",
        marginTop:5,
        textAlign:'center'
    }
  });

export default SecondQ;