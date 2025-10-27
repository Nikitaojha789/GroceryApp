import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import persistStore from 'redux-persist/es/persistStore';;
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

