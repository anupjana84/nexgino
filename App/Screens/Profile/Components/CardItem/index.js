import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CardItem = ({
  tittle="",
  value='',
  onBlur,
  onChangeText,
  placeholder="Email",
  keyboardType='default',
  maxLength=50
}) => {
  return (
    <View>
       <View style={{width:"100%", height:70, backgroundColor:'#FAFAFA',
        borderRadius:15, marginVertical:10,}}>
          <View style={{width:'100%', height:"50%"}}>
            
          <Text>{tittle}</Text>
      
        </View>
          <View style={{width:'100%', height:"50%"}}>
            
          <TextInput
          
          style={{width:"100%", height:"100%",  }}
          onChangeText={onChangeText}
          placeholderTextColor={'#b4bac5'}
          placeholder={placeholder}
          keyboardType={keyboardType}

          onBlur={onBlur}
          value={value}

          autoCapitalize='none'
          autoCorrect={false}
          maxLength={maxLength} 
          />
      
        </View>
        </View>
    </View>
  )
}

export default CardItem

const styles = StyleSheet.create({})