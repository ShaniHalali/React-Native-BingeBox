import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants/Color"


const ThemedButton = ({style,color, ...props}) => {
  
  const backgroundColor = color != null ? color : Colors.primary;

  return (
    <Pressable
    style={({ pressed }) => [styles.btn,{backgroundColor}, pressed && styles.pressed, style]}
    {...props}
    />
  )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FFA726', 
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  pressed: {
    opacity: 0.75,
  },
})
