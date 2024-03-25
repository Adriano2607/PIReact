import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Detalhes from "./src/screens/detalhes";

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Detalhes" component={Detalhes}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
  )
}
