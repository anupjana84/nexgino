import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMessaCom = ({msg}) => {
  return (
    <View style={{ width: '100%', height: 20, }}>
                              <Text style={{ color: 'red' }}>{msg}
                              </Text>
                           </View>

  )
}

export default ErrorMessaCom

const styles = StyleSheet.create({})