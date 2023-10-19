import React, {useState} from 'react';
import {Alert, Modal, StyleSheet,ActivityIndicator, Text,StatusBar,Dimensions, View} from 'react-native';
const {width,height} = Dimensions.get('window');
const Loder = ({show}) => {
 
  return (
    <> 

      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
       >
        <StatusBar hidden={true}/>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <ActivityIndicator size="large" color="#3887ff" />
            
          </View>
        </View>
      </Modal>
     
  
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
   width:width,height:height,
    justifyContent: 'center',
    alignItems: 'center',
   position:'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)', 
    
  },
  modalView: {
    width:100,
    height:100,
    backgroundColor:'white',
    justifyContent:'center',
    borderRadius:15
  },
 
});

export default Loder;