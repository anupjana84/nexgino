import { StyleSheet, Text, StatusBar, SafeAreaView, View, Image } from 'react-native'
import React from 'react'

import Entypo from 'react-native-vector-icons/Entypo';

import { imagLink } from '../../../../Images/imageLink';


const CardItem = () => {
  return (
    <View style={styles.cardLower}>
            <View style={styles.cardLowerTop}>
              <View style={styles.cardLowerTopLeft}>
                <View style={{
                  width: 50, height: 50, borderRadius: 15,
                  backgroundColor: "#DBDAD8"
                }}>
                  <Image source={imagLink.avatar}
                    style={{
                      width: "100%", height: '100%', resizeMode: "cover",
                      borderRadius: 15
                    }} />
                </View>
              </View>
              <View style={styles.cardLowerTopMiddle}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>Ellina</Text>
                <Text style={{ color: '#A1AACC', fontSize: 12, fontWeight: '600' }}>
                12 Jan 2020,
                8am - 10am</Text>

              </View>
              <View style={{
                width: '20%', height: "100%",
                justifyContent: 'center', alignItems:'flex-end'
              }}>
                <Entypo name="dots-two-vertical" size={18} color="black" />
              </View>


            </View>
          
          </View>
  )
}

export default CardItem

const styles = StyleSheet.create({
    cardLower:{height:80, backgroundColor:'#ffffff',
    justifyContent:'center',
    borderRadius:15,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
marginBottom:10

},

    cardLowerTop: {
        width: '100%', height: '80%', justifyContent: 'center',
    
        paddingHorizontal: 15,
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center'
      },
      cardLowerTopLeft: {
        width: '20%', height: "100%",
        justifyContent: "center", alignContent: 'center'
      },
      cardLowerTopMiddle: {
        width: '60%', height: "100%",
        justifyContent: "center",
 
      },
      iconCircle: {
        width: 24, height: 24, borderColor: '#a4abbd',
        justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderRadius: 12
      },
      iconText: {
        color: 'red', fontStyle: 'italic', fontSize: 16, fontWeight: '900',
        fontFamily: 'sans-serif-light', color: '#3d80ff'
      },
      cardlowerBottom: {
        width: '100%', height: '30%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
      },
    
      cardButton: {
        width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center',
        borderRadius: 25,
        height: 35,
        color: 'white',
        backgroundColor: '#3888FF'
      },
    
    
      cardButtonText: { color: 'white', fontSize: 14, fontWeight: '400' },
    
      cardButton1: {
        width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center',
        borderRadius: 25,
        height: 35,
        backgroundColor: '#edf1fb'
      }
})