import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import useFetch from "../hooks/useFetch";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ navigation }) => {
  const id = navigation.getParam("_id");
  const { loading, data } = useFetch(`https://serverless.jmrinconlatorre.now.sh/api/meals/${id}`);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando</Text>
      ) : (
        <>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
          <Button
            title='Aceptar'
            onPress={() => {
              fetch("https://serverless.jmrinconlatorre.now.sh/api/meals", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  meal_id: id,
                  user_id: "1234",
                }),
              }).then(() => {
                alert("Orden fue agregada con exito");
                navigation.navigate("Meals");
              });
            }}
          />
          <Button
            title='Cancelar'
            onPress={() => navigation.navigate("Meals")}
          />
        </>
      )}
    </View>
  );
};
