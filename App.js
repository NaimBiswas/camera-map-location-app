/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux'
import Store from './store/Store';
import MainNav from './navigation/MainNav';



function App() {
   return (
      <Provider store={Store}>
         <NativeBaseProvider>
            <MainNav />
         </NativeBaseProvider>
      </Provider>
   );
}

export default App;