import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const FormButton = ({
    text="",
    onPress,
    disabled,
    backgroundColor,
    opacity
}) => {
    
  return (
    <TouchableOpacity
    onPress={onPress} style={{...styles.loginButton,
     backgroundColor:backgroundColor,
  opacity:opacity

}}
     disabled={disabled}
    >
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
    >{text}</Text>
 </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
    loginButton: {
        width: "100%", height: 50,
         justifyContent: "center",
        alignItems: "center", marginTop: 25, borderRadius: 10
     },
})