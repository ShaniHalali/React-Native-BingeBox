import { View, useColorScheme, StyleSheet, ImageBackground } from 'react-native'
import { Colors } from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'
import lightBackground from '../assets/image/cloudsBackground.png'
import darkBackground from '../assets/image/darkCloudsBackground.png'

const backgrounds = {
  movieList: {
    light: lightBackground,
    dark: darkBackground,
  },
}

const ThemedView = ({ mode, style, children, ...props }) => {
  const colorScheme = useColorScheme()
  const scheme = colorScheme ?? 'light'

  const isMovieMode = mode === 'moviesList'
  const background = isMovieMode ? backgrounds.movieList[scheme] : null

  const Wrapper = isMovieMode ? ImageBackground : View

  return (
    <Wrapper
      {...(isMovieMode ? { source: background } : {})}
      style={[styles.background, style]}
    >
      <SafeAreaView style={{ flex: 1 }} {...props}>
        {children}
      </SafeAreaView>
    </Wrapper>
  )
}

export default ThemedView

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff', 
  },
})
