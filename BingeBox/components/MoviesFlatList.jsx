import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "../components/MovieCard";
import mockData from "../mockData/mockMoviesData";


const MoviesFlatList = ({movies}) => {


  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard movie={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default MoviesFlatList;

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
