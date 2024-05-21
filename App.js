import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import CadastroScreen from "./src/screens/CadastroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetalhesFilmeScreen from "./src/screens/DetalhesFilmeScreen";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "LOGIN DO USUÁRIO",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#B81D24" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{
            title: "CADASTRO DE USUÁRIO",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#B81D24" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "FILMES POPULARES",
            headerLeft: null,
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#B81D24" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="DetalhesFilme"
          component={DetalhesFilmeScreen}
          options={{
            title: "DETALHES DO FILME",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#B81D24" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
