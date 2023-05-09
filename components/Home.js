import React, { useCallback, useEffect, useRef, useState } from 'react'
import {Button, ScrollView, StyleSheet, Text,ToastAndroid, TextInput, TouchableOpacity, View, CheckBox} from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from './AppBar';
import Toast from 'react-native-toast-message';
import Task from './Task';


const Home = ({navigation}) => {
 
    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Hello',
          text2: '일정이 추가되었습니다.',
          visibilityTime: 1000,
          autoHide: true,
          topOffset: 30,
       
          onPress: () => {
            console.log('toast pressed');
          },
        });
      };
    
    const [text, onChangeText] = useState('');
 
     
    const styles = StyleSheet.create({
        allContainer:{
marginHorizontal:25,
        },
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#F5FCFF',
  },
  title: {
    flexDirection:'row' ,
    justifyContent:'center',
    marginTop:50,
  borderRadius:120,
    backgroundColor: '#AE94F7',
    paddingHorizontal:100,
    paddingVertical:19,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputAndButton:{
flexDirection:"row",
justifyContent:"space-between",
marginTop: 42,
  },
  input: {
    height: 40,
   borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal:15,
    color: '#000',
  },
  button:{
    left:0,
border:2,
borderColor:"#000",
backgroundColor:'#F5FCFF',
  },

});



  return ( 
   <ScrollView>
      <View
     style={styles.title}
    >  
        <Icon name="calendar-check"  size={20}></Icon><Text>Todo List</Text>
      </View>
      <View>
      <Button title='로그인' onPress={()=> navigation.navigate('login')}></Button>
      </View>
    <View style={styles.allContainer}>
        <AppBar/>
  
       <View style={styles.inputAndButton}> 
            <TextInput
        style={styles.input}
        placeholder='+ 할 일을 입력해 주세요.'
        onChangeText={onChangeText}
        value={text}
        
      />
    <TouchableOpacity style={styles.button} onPress={showToast}>
      <Text>등록하기</Text>
      </TouchableOpacity>
      </View>
   <Task/>
   <Task/>
   <Task/>
   <Task/>
    </View>
    </ScrollView>
  )
}

export default Home
