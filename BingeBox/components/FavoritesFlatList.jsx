import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import FavoriteCard from "../components/FavoriteCard"


const FavoritesFlatList = ({favoritesMovies}) => {


  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        data={favoritesMovies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FavoriteCard favorite={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default FavoritesFlatList;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    paddingHorizontal: 12,
    alignItems: "center",
  },
});
