import React, { useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Intro = ({route, navigation}) => {

    const name = route.params.name;

    const onPress = useCallback(()=>{
        //메인 페이지로 넘어가기 - name 넘기기
    });

    return (
        <View style={styles.container}>
            <Text style={styles.preface}>사실...</Text>
            <Text style={styles.preface}>관리자는 이번 학기 망하지 않았습니다.</Text>
            <Text style={styles.preface}>따라서 당신의 위로가 필요없습니다.</Text>
            <Text style={styles.preface}>4번 동안 수고많으셨습니다.</Text>
            <Text style={styles.title}>이제 본격적으로 자신을 알아볼까요?</Text>
            <TouchableOpacity>
                <Text style={styles.button} onPress={onPress}>네</Text>
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
    preface: {
        fontFamily:"HappyGoheungL",
        fontSize:45,
        color:"#fff",
        marginTop:-15,
        textAlign:"center"
    },
    title: {
        fontFamily:"HappyGoheungB",
        fontSize:45,
        color:"#fff",
        marginTop:80,
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
    }
  });

export default Intro;