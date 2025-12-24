import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const movieDetails = () => {
    const { id, title, poster, overView, vote_average } = useLocalSearchParams()

  return (
    <View>
      <Text>[{id}]</Text>
    </View>
  )
}

export default movieDetails

const styles = StyleSheet.create({})