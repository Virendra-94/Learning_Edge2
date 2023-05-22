
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, OnBoardingScreen} from './screens';


import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

// import { useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
export default function App() {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  // useEffect(() => {
  //   AsyncStorage.getItem("alreadyLaunched").then((value) => {
  //     if (value === null) {
  //       AsyncStorage.setItem("alreadyLaunched", "true");
  //       setIsFirstLaunch(true);
  //     } else {
  //       setIsFirstLaunch(false);
  //     }
  //   });
  // }, []);
  return (
   
    <NavigationContainer>
    <Stack.Navigator>
      {/* {isFirstLaunch && (
        <Stack.Screen
          options={{ headerShown: false }}
          name="OnboardingScreen"
          component={OnboardingScreen}
        />
      )} */}
       <Stack.Screen
          options={{ headerShown: false }}
          name="OnboardingScreen"
          component={OnBoardingScreen}
        />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}


