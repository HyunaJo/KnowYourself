import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RetryQ = ({route, navigation}) => {
    const name = route.params.name;
    const questionNum = route.params.questionNum;

    const onPress = useCallback(()=>{
        switch(questionNum){
            case 1:
                navigation.navigate("FirstQ",{name:name});
                break;
            case 2:
                navigation.navigate("SecondQ",{name:name});
                break;
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>...</Text>
            <Text style={styles.title}>관리자는</Text>
            <Text style={styles.title}>그렇게 생각하지 않습니다?</Text>
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
        color:"#fff"
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

export default RetryQ;