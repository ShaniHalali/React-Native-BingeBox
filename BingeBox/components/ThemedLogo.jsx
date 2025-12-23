import { StyleSheet,useColorScheme, Image, style } from 'react-native'

import logo from '../assets/image/bingeBoxLogo.png'

const ThemedLogo = ({style: customStyle }) => {

  return (
  <Image source = {logo} style={[styles.logo, customStyle ]}/>
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
})