import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, View , Image, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const {height, width} = Dimensions.get('window')
const [ITEM_WIDTH, ITEM_HEIGHT]= [130,36]

const Home = ({navigation}) => {
  /* 화면 UI 구성 */
  const printTopBorder = () => {
      var temp = []
      let cnt = width / ITEM_WIDTH
      let itemSpacing =  (width - cnt * ITEM_WIDTH)/cnt
      let itemStyle = Object.assign(styles.border.top,{marginLeft:itemSpacing})
      for (let i=0; i<cnt; i++){
        temp.push(<Text style={itemStyle}>너 자신을 알라</Text>)
      }
      return temp
   }

   const printLeftBorder = () => {
    var temp = []
    let cnt = height / ITEM_WIDTH
    console.log(cnt)
    let itemSpacing =  (height - cnt * ITEM_WIDTH)/cnt + ITEM_WIDTH
    let itemStyle = Object.assign(styles.border.left,{marginLeft:-ITEM_HEIGHT, marginBottom:itemSpacing})
    for (let i=0; i<cnt; i++){
      temp.push(<Text style={itemStyle}>너 자신을 알라</Text>)
    }
    return temp
  }

  const printRightBorder = () => {
    var temp = []
    let cnt = height / ITEM_WIDTH
    console.log(cnt)
    let itemSpacing =  (height - cnt * ITEM_WIDTH)/cnt + ITEM_WIDTH - 15
    let itemStyle = Object.assign(styles.border.right,{marginLeft:-ITEM_HEIGHT-0, marginBottom:itemSpacing})
    for (let i=0; i<cnt; i++){
      temp.push(<Text style={itemStyle}>너 자신을 알라</Text>)
    }
    return temp
  }
   /* Action */
   const onPress = useCallback(()=>{
    console.log("click");
    navigation.navigate("Login")
  });


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        { printTopBorder()}
      </View>
      <View style={{flex:12,flexDirection:'row'}}>
        <View style={{flex:1}}>
          {printLeftBorder()}
        </View>
        <View  style={{flex:6}}>
          <View style = {styles.section}>
            <Text style = {styles.title}>KNOW Yourself</Text>
            <Text style = {styles.text}>Are You Ready?</Text>
            <TouchableOpacity>
              <Text style={styles.button} onPress={onPress} >Yes, I Am</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="none"/>
          <View style = {styles.section}>
            <Image style={styles.socratesImage} source={require('../assets/images/socrates.png')}/>
          </View>
        </View>
        <View style={{flex:1}}>
          {printRightBorder()}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center'
  },
  header:{
    width: width,
    flex:1,
    flexDirection: 'row',
    backgroundColor:"#000",
    zIndex: 3, // works on ios
    elevation: 3 // works on android
  },
  section: {
    flex:1,
    alignItems: 'center'
  },
  border: {
    top:{
      fontFamily:"HappyGoheungL",
      color:"gray",
      marginTop:35,
      textAlign:'center',
      width:130,
      height:36,
      fontSize:36
    },
    left:{
      fontFamily:"HappyGoheungL",
      color:"gray",
      textAlign:'center',
      width:130,
      height:36,
      fontSize:36,
      transform: [{ rotate: '-90deg'}]
    },
    right:{
      fontFamily:"HappyGoheungL",
      color:"gray",
      textAlign:'center',
      width:130,
      height:36,
      fontSize:36,
      transform: [{ rotate: '90deg'}]
    }
  },
  title: {
    fontFamily:"HappyGoheungB",
    fontSize:70,
    color:"red",
    marginTop:88
  },
  button: {
    fontFamily:"HappyGoheungL",
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
  },
  socratesImage:{
    width: width,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  }
});

export default Home;