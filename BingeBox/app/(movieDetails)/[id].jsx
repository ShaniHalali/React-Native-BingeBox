import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Color";
import { useLocalSearchParams } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemeText";
import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/slices/favoritesSlice";

const fontFamilyPlatform =
  Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";

const movieDetails = () => {
  const { id, title, poster, overview, voteAverage } = useLocalSearchParams();
  console.log("selected movie details:", {
    id,
    title,
    poster,
    overview,
    voteAverage,
  });

  const dispatch = useDispatch();

  const favoritesMovies = useSelector((state) => state.favorites);
   //console.log("Favorites movies REDUX: ", favoritesMovies);
  const movieId = Number(id);
  const isFavorite = favoritesMovies.includes(movieId);


  const onPressFavoriteButton = () => {
    if (isFavorite) {
      // user can remove it from the list
      dispatch(removeFavoriteMovie(movieId));
    } else {
      dispatch(addFavoriteMovie(movieId));

    }
  };

  return (
    <ThemedView mode={"movieDetails"} style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        bounces={false} // iOS
        overScrollMode="never" // Android
      >
        <Image source={{ uri: poster }} style={styles.image} />
        <Spacer height={10} />
        <ThemedText style={[styles.title]}>{title}</ThemedText>
        <Spacer height={10} />

        <View style={{ paddingHorizontal: 40 }}>
          <ThemedText style={[styles.overviewText]}>OverView:</ThemedText>
          <ThemedText style={[styles.detailsText]}>{overview} </ThemedText>
        </View>

        <Spacer height={10} />
        <ThemedText style={[styles.ratingText]}>
          Rating: {voteAverage} ⭐
        </ThemedText>

        <ThemedButton
          title="is Favorite movie button"
          onPress={onPressFavoriteButton}
        >
          <Text style={styles.btnText}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </Text>
        </ThemedButton>
      </ScrollView>
    </ThemedView>
  );
};

export default movieDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: fontFamilyPlatform,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: fontFamilyPlatform,
  },

  image: {
    width: "70%",
    height: 350,
    borderRadius: 10,
    backgroundColor: "#ccc",
    resizeMode: "stretch",
  },
  overviewText: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },
  detailsText: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },

  ratingText: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: fontFamilyPlatform,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
    minHeight: "100%",
  },
});
