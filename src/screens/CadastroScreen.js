import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CadastroScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const limparCampos = () => {
    setEmail("");
    setPassword("");
  };
  
  const handleCadastro = async () => {
    const user = {
      email,
      password,
    };
    if (!email || !password) {
      alert("Preencha todos os campos!");
      limparCampos();
      return;
    }
    await AsyncStorage.setItem("user", JSON.stringify(user));
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292F33",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "90%",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#e50914",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
});

export default CadastroScreen;
