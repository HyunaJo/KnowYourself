/* eslint-disable no-undef */
import React, {useState, useEffect, useRef,useCallback} from 'react';
import {View, Text, SafeAreaView, StatusBar, Dimensions, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { firestore } from "../firebase";
import SelectDropdown from 'react-native-select-dropdown';
import { withTheme } from 'styled-components';
import Toast from './components/Toast';
const {width} = Dimensions.get('window');

const Send = ({route, navigation}) => {

  const name = route.params.name;
  const [userList, setUserList] = useState([]);
  const [strength, onChangeStrength] = React.useState("");
  const [weakness, onChangeWeakness] = React.useState("");
  const [receiver, setReceiver] = useState("");
  const toastRef = useRef(null);

  useEffect(() => {
    firestore.collection("user").get().then((users)=>{
        let userData = []
        users.forEach((user)=>{
          if (user.id != name){
            let data= {title:`${user.id}`}
            userData.push(data)
            console.log(userData)
          }
        })
        setUserList(userData)
    });
  }, []);


  const onPressSend = useCallback(()=>{
      if(strength.length < 10 ||weakness.length < 10){
        toastRef.current.show("장점 단점 각각 10자 이상 작성!");
      }
      else if (receiver == ""){
        toastRef.current.show("보낼 사람을 선택해!");
      }
      else {
          //firebase에 쓰기
          let data = {
            advantage:strength,
            disadvantage:weakness,
            user:receiver
          }
          firestore.collection("message").add(data)
          navigation.reset({routes: [{name: "Main", params:{name:name}}]})
      }
  });

  const onPressCancle = useCallback(()=>{
    navigation.reset({routes: [{name: "Main", params:{name:name}}]})
  });

  return (
    <View style={styles.saveAreaViewContainer}>
      <View style={styles.viewContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.dropdownsRow}>
            <SelectDropdown
              data={userList}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setReceiver(selectedItem.title);
              }}
              defaultButtonText={' '}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#fff'} size={14}/>;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
            <Text style={styles.title}>님에게 조언 보내기</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{flex:5}}>
        <View style={{flex:1}}>
            <Text style={styles.inputTitle}>장점</Text>
            <TextInput
                multiline={true}
                placeholder="10자 이상 작성하세요."
                placeholderTextColor="#666"
                style={styles.input}
                onChangeText={onChangeStrength}
                value={strength}
            />
            <Text style={styles.inputTitle}>단점</Text>
            <TextInput
                multiline={true}
                placeholder="10자 이상 작성하세요."
                placeholderTextColor="#666"
                style={styles.input}
                onChangeText={onChangeWeakness}
                value={weakness}
            />
          <View style={{flexDirection:"row", marginTop:10,marginLeft:"auto", paddingEnd:20}}>
            <TouchableOpacity>
                  <Text style={styles.button} onPress = {onPressSend}>전송</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                  <Text style={styles.button} onPress = {onPressCancle}>취소</Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex:1,alignItems: 'center'}}>
          <Toast ref={toastRef}/>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
title: {
    fontFamily:"HappyGoheungB",
    fontSize:42,
    color:"#fff",
    marginLeft:15
},
button: {
  fontFamily:"HappyGoheungL",
  margin:8,
  fontSize:45,
  height: 40,
  width: 100,
  borderWidth: 0.7,
  borderRadius:10,
  textAlign:'center',
  borderColor:"#fff",
  color:"#fff"
},
inputTitle:{
    fontFamily:"HappyGoheungB",
    fontSize:42,
    color:"#fff",
    marginLeft:25,
    marginTop:10,
    marginBottom:-15
},
input: {
    fontFamily:"HappyGoheungL",
    fontSize:32,
    color:"white",
    height: 150,
    margin: 20,
    marginTop:0,
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 5,
    borderColor:"#fff",
    textAlignVertical: 'top',
    
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  saveAreaViewContainer: {paddingTop:40,flex: 1, backgroundColor: '#000'},
  viewContainer: {flex: 1, width, backgroundColor: '#000'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
  },
  dropdownsRow: {flexDirection: 'row', width: '100%', paddingHorizontal: '5%'},
  dropdown1BtnStyle: { //drop down box 전체 레이아웃
    width:120,
    height: 45,
    backgroundColor: '#000',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#fff', 
  },
  dropdown1BtnTxtStyle: {color: '#fff', textAlign: 'left',fontFamily:"HappyGoheungB", fontSize:40}, // drop down 안에 글자
  dropdown1DropdownStyle: {backgroundColor: '#000000',borderWidth:1, borderColor:"#444", borderRadius: 8},
  dropdown1RowStyle: {backgroundColor: '#000000', borderBottomColor: '#444',borderRadius: 8},
  dropdown1RowTxtStyle: {color: '#fff', textAlign: 'left'},
  divider: {width: 12},
});

export default Send