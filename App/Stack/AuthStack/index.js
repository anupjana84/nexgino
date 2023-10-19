// In App.js in a new project


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../Screens/Login';




const Stack = createNativeStackNavigator();

function AuthStack() {


  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
     
        <Stack.Screen name="Login" component={Login} />
        
      </Stack.Navigator>
  
  );
}

export default AuthStack;