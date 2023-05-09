
import { useState } from 'react'
import { Button, Text, TextInput, TextInputBase, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({navigation}) => {
  const [id, idSet] =useState('')
    const idHandler = (e)=> idSet(e.target.value)
    console.log(idHandler)
    const styles=StyleSheet.create({
        allContainer:{
            textAlign:'center',
            marginHorizontal:12,
            marginVertical:55,
                    },
                loginTitle:{
                    textAlign:'center',
                    marginTop:190,
                    fontSize:30,

                },
loginInput:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:70,
},
loginInputEach:{
    width:300,
marginTop:12,
borderBottomColor:'#AE94F7',
borderBottomWidth:2,
paddingVertical:15,
paddingHorizontal:2,
},
loginButton:{
    marginVertical:20,
    backgroundColor: '#AE94F7',
  marginHorizontal:20,
  color:'#000',
  paddingVertical:11,
},
    })
  return (
    <View style={styles.allContainer}>
   <Icon name='arrow-left-thin' size={30} onPress={()=>{navigation.navigate('home')}}></Icon>
    <Text style={styles.loginTitle}>Login</Text>
   <View style={styles.loginInput}>
    <TextInput style={styles.loginInputEach} placeholder='아이디를 입력해주세요' onChange={idHandler}></TextInput>
    <TextInput style={styles.loginInputEach} placeholder='비밀번호를 입력해 주세요'></TextInput>
    </View>
    <View style={styles.loginButton}><Button title='로그인'></Button></View>
    </View>
  )
}

export default Login