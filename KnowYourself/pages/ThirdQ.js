
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useCallback, useRef, useState } from 'react';
const ThirdQ = ({route, navigation}) => {

    console.log(route.params.name);
    const name = route.params.name;
    const retryCnt = route.params.cnt; // retry 변수 설정
    
    const onPress = useCallback((idx)=>{
        console.log("click : "+idx);
        if(retryCnt != 5){ // 아직 더 굴러야함.
            let retryString=""
            switch(idx) {
                case 1:
                    retryString = `관리자는 당신의 대답이${'\n'}마음에 들지 않습니다.`
                    break
                case 2:
                    retryString = `관리자는 당신의 마지막 ...이${'\n'}마음에 들지 않습니다.`
                    break
                case 3:
                    retryString = `관리자는${'\n'}지금 당장이 중요합니다.`
                    break
                case 4:
                    retryString = "왜 ‘잘’에서 머뭇거려?"
                    break
                case 5:
                    retryString = "우울하다는데 왜 말을 안 해?"
                    break
                default:
                    retryString = "Error: idx error"
            }

            navigation.navigate("RetryQ2",{name:name,text:retryString,cnt:retryCnt})

        }
        else { // 본 페이지로 넘어가기
            console.log("다 굴렀다..")
            navigation.navigate("Intro",{name:name})
        }
      });
     
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>관리자는 이번 학기 성적이{'\n'}망해서 위로가 필요합니다.{'\n'}당신의 대답은?</Text>
            <TouchableOpacity>
                {/* <Text style={styles.button} onPress={onPress} >Yes, I Am</Text> */}
                <Text style={styles.button} onPress={()=>onPress(1)} >몇점인데?</Text> 
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button} onPress={()=>onPress(2)}>다음 학기에는 잘 나올거야...</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Text style={styles.button} onPress={()=>onPress(3)}>다음 학기에는... 잘 나올거야</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Text style={styles.button} onPress={()=>onPress(4)}>다음 학기에는 잘... 나올거야</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button} onPress={()=>onPress(5)}>(아무말도 하지 않는다)</Text>
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
        textAlign:'center'
    },
    button: {
      fontFamily:"HappyGoheungL",
      margin:10, 
      fontSize:45,
      height: 40,
      width: 330,
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