import { StatusBar } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ 
          title: 'LOGIN DO USUÁRIO',
          headerTitleAlign: 'center',
          headerStyle:{ backgroundColor: "#B81D24" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
         }}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ 
          title: 'CADASTRO DE USUÁRIO',
          headerTitleAlign: 'center',
          headerStyle:{ backgroundColor: "#B81D24" },
          headerTintColor: "#FFF",
          headerTitleStyle: { fontWeight: "bold" },
         }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}