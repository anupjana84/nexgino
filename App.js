


import React from 'react';



import {Provider} from 'react-redux';

import { store } from './App/Store';
import Login from './App/Screens/Login';
import MainStack from './App/Stack';


// LogBox.ignoreLogs([
//   'new NativeEventEmitter',
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);
// LogBox.ignoreAllLogs();

const App = () => {
  return (
    
        <Provider store={store}>
        
            <MainStack />
          
        </Provider>
     
  );
};

export default App;
