import { StyleSheet, Text, View, Platform, Image, ImageBackground, useColorScheme } from 'react-native'
<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, { useEffect } from 'react'
>>>>>>> 120590da5934852199a2e6d37db706798a07aede
import { Colors } from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import MoviesFlatList from '../../components/MoviesFlatList'
import { fetchMovies } from '../../services/mappers/api/moviesApi'

const fontFamilyPlatform =  Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold';

const moviesList = () => {

  useEffect(() => {
    const loadMovies = async () => {
      try{
<<<<<<< HEAD
        const moviesFetchedList = await fetchMovies()
        console.log('movies fetched:', moviesFetchedList)
        setMovies(moviesFetchedList)

      } catch(error) {
        console.error('Failed to fetch movies:', error)
        setError(error)
=======
        const movies = await fetchMovies()
        console.log('movies fetched:', movies)

      } catch(error) {
        console.error('Failed to fetch movies:', error)
>>>>>>> 120590da5934852199a2e6d37db706798a07aede
      }
    }
    loadMovies()
  }, [])

<<<<<<< HEAD
  const [moviesList, setMovies] = useState(null)
  const [error, setError] = useState(null)

=======
>>>>>>> 120590da5934852199a2e6d37db706798a07aede
  return (
    <ThemedView mode={'moviesList'} style={[styles.container ]}>
        <ThemedLogo style={{height: 150 , alignSelf: 'center'}}/>
         <ThemedText style={[styles.title, { alignSelf: 'center' }]}>Ready to Binge?</ThemedText>
         <ThemedText style={[styles.title, { alignSelf: 'center' }]}>Heres whats hot right now</ThemedText>
        <Spacer/>
        {/* Failed to fetch movies*/}
        {error && <Text style={styles.error}>{error}</Text>}

        {/* Loading indicator*/}
        {!moviesList && !error && (
          <ThemedText style={{marginTop: 20 }}>Loading Movies...</ThemedText>
        )}

        {/* Uploaded Movies successfully */}
        {moviesList && (
        <MoviesFlatList movies={moviesList}/>
        )}

    </ThemedView>
  )
}

export default moviesList

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: fontFamilyPlatform,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        
    },
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
  },
      buttons: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        width: "70%",
        alignItems: 'center',
      },

  btnText: {
  color: 'white',
  fontSize: 24, 
  fontWeight: 'bold',
  fontFamily: fontFamilyPlatform,
},


})