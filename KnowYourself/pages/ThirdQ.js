import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ThirdQ = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>관리자는 이번 학기 성적이 망해서 위로가 필요합니다.당신의 대답은?</Text>
            <Text style={styles.title}>당신의 대답은?</Text>
            <TouchableOpacity>
                {/* <Text style={styles.button} onPress={onPress} >Yes, I Am</Text> */}
                <Text style={styles.button} >네</Text> 
                <Text style={styles.button} >아니요</Text>
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

export default ThirdQ;