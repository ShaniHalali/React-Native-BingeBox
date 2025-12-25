import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { Colors } from "../../constants/Color";
import ThemedView from '../../components/ThemedView'
import moviesList from './movies/moviesList'
import ThemedLogo from '../../components/ThemedLogo'
import ThemedText from '../../components/ThemeText'
import Spacer from '../../components/Spacer'
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from "../../redux/slices/favoritesSlice";

const fontFamilyPlatform = Platform.OS === "ios" ? "Poppins-Bold" : "Poppins-Bold";


const favoritesMoviesList = () => {
  const dispatch = useDispatch();
  const favoritesMovies = useSelector((state) => state.favorites);
  console.log("Favorites movies REDUX: ", favoritesMovies);
  const favoritesMoviesLength = favoritesMovies.length;
  console.log("Favorites movies REDUX size: ",favoritesMoviesLength)
  const isSavedMovies = favoritesMoviesLength > 0;

  const getScreenTitle = () =>  {
    if(isSavedMovies) {
      return "Binge your favorites movies!"
    }
    return "You didn't save any movies yet!"
  }

  return (
    <ThemedView mode={'moviesList'} >
        <ThemedLogo style={{height: 150 , alignSelf: 'center'}}/>
         <ThemedText style={[styles.title, { alignSelf: 'center' }]}>{getScreenTitle()}</ThemedText>
          <Spacer/>
          {/* Favorites movies list*/}

    </ThemedView>

  )
}

export default favoritesMoviesList

const styles = StyleSheet.create({

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
})