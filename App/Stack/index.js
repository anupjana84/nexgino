// In App.js in a new project

import React,{useEffect,useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setToken } from '../Reducer/User';
import Loder from '../Utils/Loder';


const Stack = createNativeStackNavigator();

function MainStack() {
    const dispatch=useDispatch()
    const [loder, setLoder] = useState(true)
    const {accessToken}=useSelector(state=>state.User)
    // console.log(loder)
    useEffect(() => {
       (async()=>{
        try {
            setLoder(true)
            const token =JSON.parse(await AsyncStorage.getItem('token'))
            if(token){
                setLoder(false)
                dispatch(setToken(token))

            } 
        } catch (error) {
            setLoder(false)
            console.log(error)
        }finally{
            setLoder(false)
        }

       })() 
    
      
    }, [accessToken,setLoder])
    
    if (loder) {
        return <Loder show={true}/>
    }
  return (
    <NavigationContainer>

{accessToken?<AppStack/>: <AuthStack/>}


    </NavigationContainer>
  );
}

export default MainStack;