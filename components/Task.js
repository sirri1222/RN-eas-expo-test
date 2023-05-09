import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, StyleSheet, Text} from "react-native";

const Task = () => {
     // 체크박스
  const [isSelected, setSelection] = useState(false);
  const styles = StyleSheet.create({
    checkboxAndButton:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:40,
        
      },
      checkbox:{
        flexDirection:"row",  
      },
      DeleteButton:{
        flexDirection:"row",
        gap:11, 
      },
  })
  return (
    <>   
        <View style={styles.checkboxAndButton}>
    <View style={styles.checkbox}>
      <BouncyCheckbox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text>할일 1</Text>
      </View>
      <View  style={styles.DeleteButton}>
        <Icon name='delete-forever' size={20}></Icon>
    <Icon name='pencil' size={20}></Icon></View> 
    </View>
    </>
  )
}

export default Task