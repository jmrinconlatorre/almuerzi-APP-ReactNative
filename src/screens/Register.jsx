import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
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

  const onSubmit = (values) => {
    fetch("https://serverless.jmrinconlatorre.now.sh/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify(values),
    })
      .then((x) => x.text())
      .then((x) => {
        if (x === "Usuario creado con éxito") {
          return Alert.alert("Exito", x, [
            {
              text: "Ir al inicio",
              onPress: () => navigation.navigate("Login"),
            },
          ]);
        }
        Alert.alert("Error", x);
      });
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        autoCapitalize='none'
        onChangeText={subscribe("email")}
        value={inputs.email}
        style={styles.input}
        placeholder='Email'
      />
      <TextInput
        autoCapitalize='none'
        onChangeText={subscribe("password")}
        style={styles.input}
        value={inputs.password}
        placeholder='Password'
      />
      <Button style={styles.boton} title='Enviar' onPress={handleSubmit} />
      <Button
        style={styles.boton}
        title='Volver al inicio'
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
