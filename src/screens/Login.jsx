import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#eee',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  input: {
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 2,
    alignSelf: 'stretch',
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
      alignItems: 'center',
      color: '#fff',
  }

});

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput style={styles.input} placeholder='Email'/>
      <TextInput style={styles.input} placeholder='Password'/>
      <Button style={styles.boton} title='Iniciar sesión'/>
      <Button style={styles.boton} title='Registrarse' onPress={() => navigation.navigate('Register') }/>
    </View>
  );
}