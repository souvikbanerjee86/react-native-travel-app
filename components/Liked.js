import React from "react"
import { View, Text, StyleSheet } from "react-native"
import colors from "./../assets/colors/colors"

const Liked = () => {
   return (
      <View style={styles.container}>
         <Text style={styles.textStyle}>Like Page Coming Soon ....</Text>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.cream,
      justifyContent: "center",
      alignItems: "center"
   },
   textStyle: {
      fontFamily: "Lato-Bold",
      color: colors.orange,
      fontSize: 20
   }
})

export default Liked
