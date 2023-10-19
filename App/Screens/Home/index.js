import { StyleSheet, Text, StatusBar, SafeAreaView, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { imagLink } from '../../Images/imageLink';
import CardItem from './Components/CardItem';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../Reducer/User';



const Home = ({ navigation }) => {
   const dispatch = useDispatch()
   const [loding, setLoding] = useState(true)
   const { accessToken } = useSelector(state => state.User)
   const { user } = useSelector(state => state.User)



   useEffect(() => {
   
      const controller = new AbortController()
         ; (async () => {
            try {
               setLoding(true)
               const res = await axios.get('https://spapi.pezala.tech/api/User/profile/',
                  {
                     headers: { Authorization: `Bearer ${accessToken}` },
                     signal: controller.signal
                  })
               // console.log(res.data, 'd')
               dispatch(setUser(res.data))
               setLoding(false)
            } catch (error) {
               setLoding(false)
               if (axios.isCancel(error)) {
                  console.log("error")
               }
               console.log(error)
            } finally {
               setLoding(false)

            }
         })()
      return () => {
         controller.abort()


      }

   }, [navigation])

   return (
      <><StatusBar
         translucent
         hidden={false}
         backgroundColor="white"
         barStyle="dark-content"

      />
         <SafeAreaView style={{ ...styles.container, marginTop: StatusBar.currentHeight }}>
            {/* ===header=== */}
            <View style={styles.header}>
               <FontAwesome5 name="grip-lines" size={20} color="black" />
               <Feather name="calendar" size={24} color="black" />
            </View>
            {/* ===header=== */}
            <Text style={styles.wolcomeText}>Welcome Back!</Text>
            <Text style={styles.titleText}>{user?.first_name}{' '}{user?.last_name}</Text>

            {/* ===card=== */}
            <View


               style={{ ...styles.cardView }}>

               {/* ==== upper part=== */}
               <View style={styles.cardUpper}>
                  <View style={styles.appontView}>


                     <Text style={{ color: 'white' }}>Appointment Request</Text>
                     <Entypo name="dots-two-vertical" size={22} color="white" />
                  </View>
                  <View style={styles.appontView1}>
                     <MaterialCommunityIcons name="clock-time-three" size={24} color="white" />
                     <Text style={{ marginLeft: 10, color: 'white' }}>12 Jan 2020,
                        8am - 10am</Text>
                  </View>
               </View>
               {/* ==== lower part=== */}
               <View style={styles.cardLower}>
                  <View style={styles.cardLowerTop}>
                     <View style={styles.cardLowerTopLeft}>
                        <View style={{
                           width: 80, height: 80, borderRadius: 15,
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
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>Johansoon</Text>

                     </View>
                     <View style={{
                        width: '10%', height: "100%",
                        justifyContent: 'center', alignItems: 'center'
                     }}>
                        <View style={styles.iconCircle}>
                           <Text style={styles.iconText}>i</Text>
                        </View>
                     </View>


                  </View>
                  <View style={styles.cardlowerBottom}>
                     <TouchableOpacity onPress={()=>{
                        navigation.navigate('Profile')
                     }} style={styles.cardButton}>
                        <Text style={styles.cardButtonText}>ACCEPT</Text>
                     </TouchableOpacity>
                     <View style={styles.cardButton1}>
                        <Text style={{ ...styles.cardButtonText, color: "#7786b7" }}>DECLINE</Text>
                     </View>

                  </View>
               </View>
               <Text style={{ marginVertical: 18, color: "#7786b7", fontWeight: '500' }}>Next appointments</Text>
               {/* ===card=== */}
               <CardItem />
               <CardItem />
               <CardItem />
            </View>


         </SafeAreaView>
      </>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f4f7ff',//f4f7ff
      paddingHorizontal: 20
   },
   header: {
      height: 50, width: '100%',

      flexDirection: 'row',
      justifyContent: 'space-between', alignItems: 'center'
   },
   wolcomeText: {
      fontSize: 15,
      letterSpacing: 1,
      fontWeight: "bold",
      fontFamily: 'sans-serif-light',

      color: '#9DA9CC'
   },
   titleText: {
      marginTop: 10,
      fontSize: 35,
      fontWeight: "bold",
      color: '#434B63'
   },
   cardView:
   {
      width: '100%', height: 250, backgroundColor: '#F2F2F2',
      borderRadius: 25, marginTop: 20,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,
   },

   cardUpper: {
      width: "100%", height: '30%',
      backgroundColor: '#3C91FF', justifyContent: 'center', alignItems: 'center',
      borderTopLeftRadius: 25, borderTopRightRadius: 25,
      paddingHorizontal: 15,
      paddingVertical: 8
   },

   cardLower: {
      width: "100%", height: '70%',
      backgroundColor: 'white', justifyContent: 'center', alignItems: 'center',
      borderBottomLeftRadius: 25, borderBottomRightRadius: 25
   },
   appontView: {
      flexDirection: 'row',

      width: '100%',
      height: "50%",
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   appontView1: {
      flexDirection: 'row',

      width: '100%',
      height: "50%",
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   cardLowerTop: {
      width: '100%', height: '70%', justifyContent: 'center',

      paddingHorizontal: 15,
      flexDirection: 'row',
      paddingVertical: 8,
      alignItems: 'center'
   },
   cardLowerTopLeft: {
      width: '30%', height: "100%",
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