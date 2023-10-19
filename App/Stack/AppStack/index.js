
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';



const Stack = createNativeStackNavigator();

function AppStack() {
  return (

      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  
  );
}

export default AppStack;