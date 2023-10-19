import {
   StyleSheet, Text, StatusBar,
   Image, View, SafeAreaView, ScrollView, TextInput,
   Pressable,
   TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { imagLink } from '../../Images/imageLink'
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { loinSchema } from './Validation';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { warinng } from '../../Utils/Message';
import Loder from '../../Utils/Loder';
import { useDispatch } from 'react-redux';
import { setUser,setToken } from '../../Reducer/User';
import ErrorMessaCom from '../../Components/ErrorMessaCom';


const Login = () => {
   const [userType, setUserType] = useState('user')
   const [loding, setLoding] = useState(false)

const dispatch=useDispatch()


const login= async(values,action)=>{

try {
 const res = await axios.post('https://spapi.pezala.tech/api/User/login/',{
      email:values.email,
      password:values.password
   })
   await AsyncStorage.setItem('token', JSON.stringify(res.data.token));
dispatch(setToken(res.data.token))
   
} catch (error) {
   console.log(error)
   warinng(error?.response?.data?.errors)
}

   
}


   return (
      <>
       <StatusBar
            translucent
            hidden={false}
            backgroundColor="white"
            barStyle="dark-content"
          
         /> 
      <SafeAreaView style={{ ...styles.container, marginTop: StatusBar.currentHeight }}>
       
          
         <ScrollView keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
         >
            <View style={{
               width: '100%', height: 220,
               display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
               <Image source={imagLink.banner}
                  style={{
                     height: 220,
                     resizeMode: 'contain',
                     width: 500
                  }} />
            </View>
            {/* ====login text=== */}

            <View style={{ width: "100%", padding: 25 }}>
               <Text style={styles.LoginText}>Login</Text>


               {/* ====login form=== */}
               {/* ====email=== */}
               <Formik
                  initialValues={{
                     email: '',
                     password: ''
                  }}
                  validateOnMount={true}
                  validationSchema={loinSchema}
                  onSubmit={login}
               >
                  {({ values,
                     errors,
                     touched,
                 
                     handleChange,
                     handleSubmit,
                     handleBlur,
                     isValid,

                     handleReset, }) => (
                     <>

                        <View style={styles.inputContainer}>
                           <View style={styles.inputLeft}>
                              <Feather
                                 name='at-sign'
                                 size={20}
                                 color='#9ca5b4'
                              />
                           </View>
                           <View style={styles.inputRight}>
                              <TextInput

                                 onChangeText={handleChange('email')}
                                 placeholderTextColor={'#b4bac5'}
                                 placeholder="Email"
                                 keyboardType='email-address'

                                 onBlur={handleBlur('email')}
                                 value={values.email}

                                 autoCapitalize='none'
                                 autoCorrect={false}
                              />
                           </View>


                        </View>
                        {errors.email && touched.email &&
                        <ErrorMessaCom msg={errors.email}/>
                          
                        }
                        {/* ====email=== */}
                        {/* ====password=== */}
                        <View style={styles.inputContainer}>
                           <View style={styles.inputLeft}>
                              <SimpleLineIcons name="lock" size={20} color="#9ca5b4" />
                           </View>
                           <View style={styles.inputMiddle}>

                              <TextInput
                                 value={values.password}
                                 onChangeText={handleChange('password')}

                                 onBlur={handleBlur('password')}
                                 placeholderTextColor={'#b4bac5'}
                                 placeholder="Password"
                                 keyboardType='default'
                                 secureTextEntry

                                 autoCapitalize='none'
                                 autoCorrect={false}
                              />
                           </View>
                           <View style={styles.inputRight1}>
                              <Pressable onPress={() => { console.log("first") }}>
                                 <Text style={styles.forgotText}>Forgot?</Text>
                              </Pressable>
                           </View>

                        </View>
                        {errors.password && touched.password &&
                            <ErrorMessaCom msg={errors.password}/>
                        }
                        {/* ====pasword=== */}
                        {/* ====Button=== */}
                        <TouchableOpacity
                           onPress={handleSubmit} style={{...styles.loginButton,
                           backgroundColor:!isValid?'#3887ff':"#3887ff",
                        opacity:!isValid?.5:1}}
                           disabled={!isValid}
                           >
                           <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                           >Login</Text>
                        </TouchableOpacity>
                     </>
                  )}
               </Formik>

               {/* ====Button=== */}
               <View style={styles.loginButon1}>

                  <View style={styles.accountText}>
                     <Text>  Don't have an account?</Text>

                     <Pressable onPress={() => console.log("first")} style={styles.pressRegister}>
                        <Text style={styles.registerText}> Register</Text>

                     </Pressable>

                  </View>



               </View>
               {/* ====Button=== */}
               {/* ====Button=== */}
               <View style={styles.loginButton2}>
                  <TouchableOpacity
                     onPress={() => { setUserType('user') }} style={{
                        ...styles.userButton,
                        backgroundColor: userType === 'user' ? '#3887ff' : '#edf1fb',
                     }}>
                     <Text style={{
                        fontSize: 20,
                        color: userType === 'user' ? 'white' : '#3887ff'
                     }}>User</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => { setUserType('layer') }} style={{
                        ...styles.userButton,
                        backgroundColor: userType === 'layer' ? '#3887ff' : '#edf1fb',
                     }}>
                     <Text style={{
                        fontSize: 20,
                        color: userType === 'layer' ? 'white' : '#3887ff'
                     }}>Layer</Text>
                  </TouchableOpacity>
               </View>
               {/* ====Button=== */}

               {/* ====Button=== */}

            </View>
            {/* <View style={{ height: 10 }}></View> */}
         </ScrollView>
      </SafeAreaView>
      <Loder show={loding}/>
      </>
   )
}

export default Login

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   input: {
      width: '100%',
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      height: 50,
      backgroundColor: "pink",
      marginTop: 20

   },
   LoginText: {
      fontSize: 35, fontWeight: "bold", color: 'black'
   },
   inputContainer: {
      width: "100%", height: 50,
      display: 'flex', flexDirection: 'row',
      borderBottomColor: '#eaebee',
      borderBottomWidth: 2,
      marginTop: 15
   },
   inputLeft: {
      width: '10%',
      justifyContent: 'center', alignItems: 'center',
      height: 50,
   },
   inputRight: {
      width: '90%', height: 50,
   },
   inputMiddle: {
      width: '60%', height: 50,
   },
   inputRight1: {
      width: '30%', height: 50,
      justifyContent: 'center', alignItems: 'flex-end',
   },
   forgotText: {
      fontSize: 15, fontWeight: "bold", color: '#528cdd'
   },
   loginButton: {
      width: "100%", height: 50,
       justifyContent: "center",
      alignItems: "center", marginTop: 25, borderRadius: 10
   },
   loginButton2: {
      width: "100%", height: 55,
      backgroundColor: "#edf1fb", justifyContent: "center",
      alignItems: "center", marginTop: 25, borderRadius: 20,
      flexDirection: 'row',
      padding: 4,
      marginTop: 100
   },
   loginButon1: {
      display: "flex", flexDirection: "row",
      width: '100%',
      marginTop: 5, height: 50,
      justifyContent: "center", alignItems: "center",


   },
   accountText: { flexDirection: 'row' },
   pressRegister: {
      justifyContent: 'center',
      alignItems: 'center',


   },
   registerText: {
      fontSize: 15, fontWeight: "bold", color: "#528cdd",



   },
   userButton: {
      width: "50%", height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,


   }

})