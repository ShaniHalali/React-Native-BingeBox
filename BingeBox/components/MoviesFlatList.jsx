import { View, FlatList, StyleSheet } from "react-native";
import React from "react";
import MovieCard from "../components/MovieCard";

const MoviesFlatList = () => {
  const mockData = [
    {
      id: "1",
      title: "Avatar: Fire and Ash",
      poster: "https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg",
      overView:
        "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Navi tribe led by the ruthless Varang. Jakes family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",
      vote_average: 6.5,
    },
    {
      id: "2",
      title: "The Batman",
      poster: "https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg",
      overView:
        "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Navi tribe led by the ruthless Varang. Jakes family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",
      vote_average: 5.32,
    },
    {
      id: "3",
      title: "Guardians of the Galaxy",
      poster: "https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg",
      overView:
        "In the wake of the devastating war against the RDA and the loss of their eldest son, Jake Sully and Neytiri face a new threat on Pandora: the Ash People, a violent and power-hungry Navi tribe led by the ruthless Varang. Jakes family must fight for their survival and the future of Pandora in a conflict that pushes them to their emotional and physical limits.",
      vote_average: 7.5,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <FlatList
        horizontal
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard id={item.id} title={item.title} poster={item.poster} />
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
