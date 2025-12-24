import { StyleSheet, Text, View, Platform, Image, ImageBackground, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'
import ThemedLogo from '../../components/ThemedLogo'
import Spacer from '../../components/Spacer'
import MoviesFlatList from '../../components/MoviesFlatList'

const fontFamilyPlatform =  Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold';

const moviesList = () => {

  return (
    <ThemedView mode={'moviesList'} style={[styles.container ]}>
        <ThemedLogo style={{height: 150 , alignSelf: 'center'}}/>
         <ThemedText style={[styles.title, { alignSelf: 'center' }]}>Ready to Binge?</ThemedText>
         <ThemedText style={[styles.title, { alignSelf: 'center' }]}>Heres whats hot right now</ThemedText>
        <Spacer/>
        <MoviesFlatList/>
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