import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Color'
import ThemedView from '../components/ThemedView'
import ThemedButton from '../components/ThemedButton'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemeText'
import {useRouter} from "expo-router"

const fontFamilyPlatform =  Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold';

const HomeScreen = () => {
const router = useRouter();

const onPressMovieList = () => {
  router.push("/movies/moviesList")
}

  return (
    <ThemedView mode={'moviesList'} style={[styles.container ]}>
      <Spacer/>
      <ThemedLogo/>

      <Spacer/>
      <ThemedText title={true} style={[styles.title]}> Welcome to BingeBox!</ThemedText>
      <Spacer/>

      <ThemedButton
      onPress={onPressMovieList}
      title="movie list"
      >
      <Text style={[styles.btnText]}>Browse Movies</Text>
      </ThemedButton>

    
    </ThemedView>
  )
}

export default HomeScreen

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