import {View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import MovieCard from '../components/MovieCard'

const MoviesFlatList = () => {
  const mockData = [
    {
      id: '1',
      title: 'Avatar: Fire and Ash',
      poster: 'https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg',
    },
    {
      id: '2',
      title: 'The Batman',
      poster: 'https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg',
    },
    {
      id: '3',
      title: 'Guardians of the Galaxy',
      poster: 'https://image.tmdb.org/t/p/w500/gDVgC9jd917NdAcqBdRRDUYi4Tq.jpg',
    },
  ]

return (
  <View style={styles.wrapper}>
    <FlatList
      horizontal
      data={mockData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MovieCard title={item.title} poster={item.poster} />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  </View>
)

}

export default MoviesFlatList

const styles = StyleSheet.create({
    wrapper: {
  width: '100%',
  alignItems: 'center',
},
listContainer: {
  paddingHorizontal: 12,
  alignItems: 'center', 
},


})
