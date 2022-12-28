import React, { useRef } from 'react';
import { TouchableWithoutFeedback , StyleSheet, Text, View, TextInput, Keyboard } from 'react-native';
import Toast from './components/Toast';


const FirstQ = () => {
    const toastRef = useRef(null);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>FIRST QUESTION</Text>
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

export default FirstQ;