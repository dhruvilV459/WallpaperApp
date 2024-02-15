import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import firebase from 'firebase/app';
import 'firebase/auth';

// Import your screens or components
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen' ;

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  // useEffect(() => {
  //   // You can perform any Firebase-related initialization here
  //   // For example, check if the user is already signed in
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       // User is signed in
  //       console.log('User is signed in:', user);
  //     } else {
  //       // User is signed out
  //       console.log('User is signed out');
  //     }
  //   });

  //   // Cleanup the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Add your screens here */}
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
