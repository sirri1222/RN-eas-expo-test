import React, { useCallback, useEffect, useRef } from 'react'
import {Button, ScrollView, StyleSheet, Text,ToastAndroid, TextInput, TouchableOpacity, View} from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppBar from './AppBar';
import Toast from 'react-native-toast-message';


const Home = () => {
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
    
    const [text, onChangeText] = React.useState('+ 할 일을 입력해 주세요.');
 
     
    const styles = StyleSheet.create({
        allContainer:{
marginHorizontal:12,
        },
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#F5FCFF',
  },
  title: {
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
    borderWidth: 1,
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
    <View style={styles.allContainer}>
        <AppBar/>
    <View
      style={styles.container}
    > 
    <StatusBar style="light-content" backgroundColor = "black"/>
      <Text style={styles.title}> <Icon name="calendar-check-o"  size={20}></Icon> Todo List</Text>
      </View>
       <View style={styles.inputAndButton}> 
        <View>
            <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
       </View>  
  <View>
    <TouchableOpacity style={styles.button} onPress={showToast}><Text>등록하기</Text></TouchableOpacity>
 
    </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Home