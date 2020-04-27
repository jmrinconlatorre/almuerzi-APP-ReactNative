import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const data = [
  { _id: "1234", name: "Churrasco", desc: "Plato tipico!, palta, mayonesa" },
  { _id: "12234", name: "Pepito", desc: "PEpito del notas ddel lucino" },
  { _id: "2234", name: "Alioli", desc: "Alioli que tira para atras" },
];

const Meals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={x => x._id}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            onPress={() => navigation.navigate('Modal', { _id: item._id })}
          />
        )}
      />
    </View>
  );
};

Meals.navigationOptions = {
  title: "Comidas disponibles",
};

export default Meals;
