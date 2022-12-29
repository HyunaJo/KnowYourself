import React, { useEffect, useCallback, useRef } from 'react';
import { TouchableWithoutFeedback , StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import { firestore } from "../firebase";
import Toast from './components/Toast';


const Login = ({navigation}) => {
    const [name, onChangeName] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const toastRef = useRef(null);

    const onPress = useCallback(()=>{
        Keyboard.dismiss();
        firestore.collection("user").get().then((users)=>{
            users.forEach((user)=>{
                if(user.id==name){
                    if(user.data().password==password){
                        // console.log("valid user");
                        navigation.navigate("FirstQ",{name:name})
                    }
                    else{
                        toastRef.current.show("당신은 당신의 이름과 생일도 잘 모르시나요?");
                    }
                }
            })
        });
    });

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>INTRODUCE Yourself</Text>
                <TextInput
                    placeholder="name"
                    placeholderTextColor="#666"
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor="#666"
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    keyboardType="numeric"
                    secureTextEntry={true}
                    maxLength="4"
                />
                <Text onPress={onPress} style={styles.text} >START</Text>
                <Toast ref={toastRef}/>
            </View>
        </TouchableWithoutFeedback>
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
    input: {
        height: 40,
        width: 180,
        margin: 8,
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
        borderColor:"#fff",
        color:"#fff"
      },
      text: {
        fontFamily:"HappyGoheungL",
        fontSize:48,
        color:"#fff",
        marginTop:15
      },
});

export default Login;