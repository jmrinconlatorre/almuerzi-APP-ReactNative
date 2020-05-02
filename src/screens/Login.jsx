import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  AsyncStorage,
} from "react-native";
import useForm from "../hooks/useForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    justifyContent: "center",
    borderBottomColor: "#eee",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 18,
    borderColor: "#ccc",
    borderWidth: 2,
    alignSelf: "stretch",
    marginBottom: 10,
    margin: 5,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  boton: {
    margin: 10,
    alignItems: "center",
    color: "#fff",
  },
});

export default ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    await fetch("https://serverless.jmrinconlatorre.now.sh/api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(values),
    })
      .then((x) => x.text())
      .then((x) => {
        try {
          return JSON.parse(x);
        } catch {
          throw x;
        }
      })
      .then((x) => {
        AsyncStorage.setItem("token", x.token);
        navigation.navigate("Meals");
      })
      .catch((e) => Alert.alert("Error", e));
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        value={inputs.email}
        autoCapitalize='none'
        onChangeText={subscribe("email")}
        style={styles.input}
        placeholder='Email'
      />
      <TextInput
        autoCapitalize='none'
        value={inputs.password}
        onChangeText={subscribe("password")}
        style={styles.input}
        placeholder='Password'
      />
      <Button
        style={styles.boton}
        title='Iniciar sesión'
        onPress={handleSubmit}
      />
      <Button
        style={styles.boton}
        title='Registrarse'
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};
