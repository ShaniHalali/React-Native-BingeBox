import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import FavoriteCard from "../components/FavoriteCard"
import { useDispatch, useSelector } from "react-redux";



const FavoritesFlatList = () => {
    const movies = useSelector((state) => state.movies);
    const favoritesIds = useSelector((state) => state.favorites);

    const favoritesMovies = movies.filter((movie) => favoritesIds.includes(movie.id));


  return (
    <View style={styles.wrapper}>
      <FlatList
        ver
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
   
  },
  listContainer: {
    
  },
});
