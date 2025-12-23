import { View, useColorScheme, StyleSheet,ImageBackground } from 'react-native'
import { Colors } from '../constants/Color'
import { SafeAreaView } from 'react-native-safe-area-context'




const ThemedView = ({mode, style, children, ...props }) => {
  const colorScheme = useColorScheme()
  //console.log("Theme color = " + colorScheme)
  const theme = Colors[colorScheme] ?? Colors.light



 return (
     <>
  
    <SafeAreaView
      style={[{ flex: 1 }, style]}
      {...props}
    >
      {children}
    </SafeAreaView>



    </>
  )


}

export default ThemedView

const styles = StyleSheet.create({
 
});
