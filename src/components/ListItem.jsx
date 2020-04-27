import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 18,
  }

});

export default ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
