import { StyleSheet, Text, View, Platform, Image, ImageBackground, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Color'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemeText'

const fontFamilyPlatform =  Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold';

const moviesList = () => {

  return (
    <ThemedView mode={'moviesList'} style={[styles.container ]}>
        <ThemedText style={[styles.title]}>Movie List</ThemedText>
    </ThemedView>
  )
}

export default moviesList

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: fontFamilyPlatform,
        
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