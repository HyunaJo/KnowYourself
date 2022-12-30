import React, { useState, useRef, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const Message =  ({advantage, disadvantage})=> {
    return (
        <View style={styles.container}>
            <Text style={styles.advTitle}>장점</Text>
            <Text style={styles.text}>{advantage}</Text>
            <Text style={styles.disadvTitle}>단점</Text>
            <Text style={styles.text}>{disadvantage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: "auto",
        backgroundColor:"#292929",
        borderTopColor:"#fff",
        borderBottomColor:"#fff",
        borderTopWidth:1,
        borderBottomWidth:1,
        padding:10,
        marginBottom:30
    },
    advTitle: {
        fontFamily:"HappyGoheungB",
        fontSize:45,
        color:"#00A3FF",
        marginBottom:-10
    },
    disadvTitle: {
        fontFamily:"HappyGoheungB",
        fontSize:45,
        color:"#f00",
        marginBottom:-10
    },
    text: {
        fontFamily:"HappyGoheungL",
        fontSize:40,
        color:"#fff"
    }
});

export default Message;