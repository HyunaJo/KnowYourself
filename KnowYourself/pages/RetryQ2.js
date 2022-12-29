import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RetryQ2 = ({route, navigation}) => {

    const name = route.params.name;
    const retryText = route.params.text;
    let retryCnt = route.params.cnt;

    const onPress = useCallback(()=>{
        navigation.reset({routes: [{name: "ThirdQ", params:{name:name,cnt:retryCnt+1}}]})
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>...</Text>
            <Text style={styles.title}>{retryText}</Text>
            <TouchableOpacity>
                <Text style={styles.button} onPress={onPress}>재시도</Text>
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
        marginTop:-20,
        textAlign:"center"
    },
    button: {
      fontFamily:"HappyGoheungL",
      margin:20,
      fontSize:45,
      height: 40,
      width: 180,
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

export default RetryQ2;