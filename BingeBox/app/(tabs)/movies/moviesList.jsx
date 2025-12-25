import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  ImageBackground,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../../constants/Color";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemeText";
import ThemedLogo from "../../../components/ThemedLogo";
import Spacer from "../../../components/Spacer";
import MoviesFlatList from "../../../components/MoviesFlatList";
import { fetchMovies } from "../../../services/mappers/api/moviesApi";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../../redux/slices/moviesSlice";

const fontFamilyPlatform = Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";

const moviesList = () => {
  const dispatch = useDispatch();
  
  const movies = useSelector((state) => state.movies);
  //console.log("movies REDUX: ", movies);
  
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  if (movies.length > 0) {
    setIsLoading(false);
    return;
  }

  const loadMovies = async () => {
    try {
      const moviesFetchedList = await fetchMovies();
      dispatch(setMovies(moviesFetchedList));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  loadMovies();
}, [movies.length]);



  const [error, setError] = useState(null);

  return (
    <ThemedView mode={"moviesList"} style={[styles.container]}>
      <ThemedLogo style={{ height: 150, alignSelf: "center" }} />
      <ThemedText style={[styles.title, { alignSelf: "center" }]}>
        Ready to Binge?
      </ThemedText>
      <ThemedText style={[styles.title, { alignSelf: "center" }]}>
        Heres whats hot right now
      </ThemedText>
      <Spacer />
      {/* Failed to fetch movies*/}
      {error && <Text style={styles.error}>{error.message}</Text>}

      {/* Loading indicator*/}
      {isLoading && (
        <ThemedText style={{ marginTop: 20 }}>Loading Movies...</ThemedText>
      )}

      {/* Uploaded Movies successfully */}
      {!isLoading && <MoviesFlatList movies={movies} />}
    </ThemedView>
  );
};

export default moviesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: fontFamilyPlatform,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
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
  buttons: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "70%",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: fontFamilyPlatform,
  },
});
