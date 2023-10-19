import { StyleSheet, Text, View, StatusBar,Image, SafeAreaView,ScrollView, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { Iocons } from '../../Components/Icon'
import { imagLink } from '../../Images/imageLink'
import CardItem from './Components/CardItem'
import { Formik } from 'formik'
import { profileSchema } from './Components/editValidation'
import { useDispatch, useSelector } from 'react-redux'
import FormButton from '../../Components/FormButton'
import ErrorMessaCom from '../../Components/ErrorMessaCom'
import axios from 'axios'
import Loder from '../../Utils/Loder'
import { success, warinng } from '../../Utils/Message'
import { setUser, removeUser } from '../../Reducer/User'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Profile = ({ navigation }) => {
const dispatch=useDispatch()


  const {user}=useSelector(state=>state.User)
  const [loding, setLoding] = useState(false)

  const { accessToken } = useSelector(state => state.User)


  const profileData=async()=>{

    try {
      
      const res = await axios.get('https://spapi.pezala.tech/api/User/profile/',
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          
        })
    
      dispatch(setUser(res.data))
      navigation.navigate('Home')
      
    } catch (error) {
     
      console.log(error)
    } 

  }


const sumitForm= async(values,action)=>{

// const headers =  { Authorization: `Bearer ${accessToken}` }; 

const apiUrl = 'https://spapi.pezala.tech/api/User/update-profile/'; 
const token = accessToken; 

const config = {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};
try {
  setLoding(true)
  const res = await axios.post(apiUrl, {
    id: 5, //Not Required
first_name: values.firstName,
last_name: values.lastName,
email: user.email,
phone_1: values.phone,
phone_2: user.phone2,
address: user.address,
city: user.city, 
state: user.state, 
country:user.country,
theme: user.theme, 
lang: user.lang,
role: user.role 
    
    
    
}, config)
  // console.log(res.data)
   setLoding(false)
   profileData()
  
   
  
 } catch (error) {
  console.log(error)
  setLoding(false)
 
  setTimeout(() => {
    warinng('Somthing worng')
   }, 100);
    
 }
 

}
const logOut= async()=>{
  try {
    await AsyncStorage.removeItem('token')
    dispatch(removeUser())
    success('Logout Successfully')
  } catch (error) {
    // console.log(first)
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
      <SafeAreaView style={{
        ...styles.container,
        marginTop: StatusBar.currentHeight
      }}>
        {/* ===== header====== */}
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>

            {Iocons.backIcon}
          </Pressable>

          <Text style={{ color: 'black', fontSize: 17, fontWeight: '600' }}> My Profile </Text>
          {Iocons.threeDotsIcon}
        </View>
        {/* ===== header====== */}
        {/* ===== profile====== */}
        <View style={styles.profileView}>
          <View style={styles.profileViewLeft}>
            <View style={{
              width: 100, height: 100,
              backgroundColor: '#DAD9DA', borderRadius: 50,
              justifyContent:'center',
              alignItems:'center'
            }}>
              <Image source={imagLink.avatar}
                    style={{
                      width: 100, height: 100, resizeMode: "contain",
                      borderRadius: 50
                    }} />
            </View>
          </View>
          <View style={styles.profileViewMiddle}>
            <Text style={styles.titleText}>Julia LLb</Text>
            <Text style={styles.roleText}>Senion layer</Text>
          </View>
          <View style={styles.profileViewRight}>
            {Iocons.editIcon}
          </View>
        </View>
        {/*  ===== profile====== */}
       
        <View style={{ marginVertical: 20 }}>
          <Text style={{ color: '#A8A8A8', fontSize: 15,  }}> Other Details </Text>
        </View>
         {/*  ===== Card====== */}
         <ScrollView keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
         >
         <Formik
                  initialValues={{
                    
                     firstName: user.first_name ||'',
                     lastName: user.last_name ||'',
                     
                     phone: user.phone1 ||'',
                  }}
                  validateOnMount={true}
                  validationSchema={profileSchema}
                  onSubmit={sumitForm}
                 
               >
                {({ values,
                     errors,
                     touched,
                 
                     handleChange,
                     handleSubmit,
                     handleBlur,
                     isValid,

                     handleReset, })=>(
                      <>
                      {/* <CardItem
               tittle='Email'
                value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                placeholder="Email"
                keyboardType='email-address'
                maxLength={50}

                />
                {errors.email && touched.email &&
                           <ErrorMessaCom msg={errors.email}/>
                        } */}
               
               <CardItem
               tittle='First Name'
                value={values.firstName}
                onBlur={handleBlur('firstName')}
                onChangeText={handleChange('firstName')}
                placeholder="First Name"
                keyboardType='default'
                maxLength={50}

                />
                {errors.firstName && touched.firstName &&
                           <ErrorMessaCom msg={errors.firstName}/>
                        }
               <CardItem
               tittle='Last Name'
                value={values.lastName}
                onBlur={handleBlur('lastName')}
                onChangeText={handleChange('lastName')}
                placeholder="Email"
                keyboardType='default'
                maxLength={50}
                />
                {errors.lastName && touched.lastName &&
                <ErrorMessaCom msg={errors.lastName}/>
                          
                        }
               <CardItem
               tittle='Phone'
                value={values.phone}
                onBlur={handleBlur('phone')}
                onChangeText={handleChange('phone')}
                placeholder="Phone"
                keyboardType='default'
                maxLength={10}

                />
                {errors.phone && touched.phone &&
                            <ErrorMessaCom msg={errors.phone}/>
                        }
      
        <FormButton text='Update'
        onPress={handleSubmit}
        disabled={!isValid}
        backgroundColor={!isValid?'#3887ff':"#3887ff"}
        opacity={!isValid?.5:1}
        />
        </>
        )}
        
        </Formik>
        <Pressable
        onPress={() =>logOut()}
      style={{marginTop:40}}
        
        >
          <Text style={{ color: '#FD7438', fontSize: 18, fontWeight: '600', marginTop: 20 }}>
             Logout </Text>
          
        </Pressable>
        </ScrollView>
        
        
        {/*  ===== Card====== */}



      </SafeAreaView>
      <Loder show={loding}/>
    </>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',//f4f7ff
    paddingHorizontal: 20
  },

  header: {
    width: '100%', height: 50,
    flexDirection: "row", justifyContent: "space-between",
    alignItems: "center"
  },

  profileView: {
    width: '100%', height: 100,
    flexDirection: "row", justifyContent: 'space-between',
    borderRadius: 10, marginTop: 20, alignItems: 'center'
  },

  profileViewLeft: {
    width: "30%",
    justifyContent: 'center',
    height: "100%"
  },
  profileViewMiddle: {
    justifyContent: 'center',
    width: "63%",
    height: "100%"
  },
  profileViewRight: {
    justifyContent: 'center',
    width: "7%",
    height: "100%"
  },
  titleText:{ fontSize: 18, fontWeight: '800', color: 'black', letterSpacing: 1 },
  roleText:{
    color: '#9BA6CA', fontSize: 15,
    fontWeight: '400', letterSpacing: 1
  }


})