import React from "react"
import {
   View,
   Text,
   StyleSheet,
   ImageBackground,
   Dimensions,
   TouchableOpacity,
   ScrollView
} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import colors from "./../assets/colors/colors"

Entypo.loadFont()

const height = Dimensions.get("window").height
const Details = ({ route, navigation }) => {
   const { item } = route.params
   return (
      <View style={styles.container}>
         <ScrollView>
            <ImageBackground
               source={item.imageBig}
               style={styles.backgroundImage}
            >
               <TouchableOpacity
                  style={styles.backBotton}
                  onPress={() => navigation.goBack()}
               >
                  <Entypo name="chevron-left" size={32} color={colors.white} />
               </TouchableOpacity>
               <View style={styles.itemWrapper}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <View style={styles.itemLocation}>
                     <Entypo
                        name="location-pin"
                        size={24}
                        color={colors.white}
                     />
                     <Text style={styles.locationText}>{item.location}</Text>
                  </View>
               </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
               <View style={styles.heartWrapper}>
                  <Entypo name="heart" size={32} color={colors.orange} />
               </View>
               <View style={styles.descriptionWrapper}>
                  <Text style={styles.descriptionText}>Description</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
               </View>
            </View>

            <View style={styles.infoWrapper}>
               <View style={styles.infoItem}>
                  <Text style={styles.infoTitle}>PRICE</Text>
                  <View style={styles.infoTextWrapper}>
                     <Text style={styles.infoText}>${item.price}</Text>
                     <Text style={styles.infoSubText}>/person</Text>
                  </View>
               </View>
               <View style={styles.infoItem}>
                  <Text style={styles.infoTitle}>RATING</Text>
                  <View style={styles.infoTextWrapper}>
                     <Text style={styles.infoText}>${item.rating}</Text>
                     <Text style={styles.infoSubText}>/5</Text>
                  </View>
               </View>
               <View style={styles.infoItem}>
                  <Text style={styles.infoTitle}>DURATION</Text>
                  <View style={styles.infoTextWrapper}>
                     <Text style={styles.infoText}>${item.duration}</Text>
                     <Text style={styles.infoSubText}> hours</Text>
                  </View>
               </View>
            </View>

            <TouchableOpacity
               style={styles.buttonWrapper}
               onPress={() => alert("You booked a trip!")}
            >
               <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
         </ScrollView>
      </View>
   )
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.cream
   },
   backgroundImage: {
      height: height * 0.6,
      justifyContent: "space-between"
   },
   backBotton: {
      marginTop: 50,
      marginLeft: 20
   },
   itemWrapper: {
      marginLeft: 20,
      marginBottom: 20
   },
   itemTitle: {
      fontFamily: "Lato-Bold",
      color: colors.white,
      fontSize: 26
   },
   itemLocation: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center"
   },
   locationText: {
      fontFamily: "Lato-Bold",
      color: colors.white,
      fontSize: 14
   },
   descriptionWrapper: {
      flex: 1,
      backgroundColor: colors.white,
      marginTop: -20,
      borderRadius: 25
   },
   heartWrapper: {
      position: "absolute",
      right: 40,
      top: -30,
      width: 64,
      height: 64,
      backgroundColor: colors.white,
      borderRadius: 64,
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
   },
   descriptionWrapper: {
      marginTop: 20
   },
   descriptionText: {
      marginLeft: 20,
      fontFamily: "Lato-Bold",
      color: colors.black,
      fontSize: 24
   },
   itemDescription: {
      marginLeft: 20,
      marginTop: 20,
      fontFamily: "Lato-Regular",
      color: colors.darkGray,
      fontSize: 18
   },
   infoWrapper: {
      flexDirection: "row",
      marginHorizontal: 20,
      marginTop: 20,
      justifyContent: "space-between"
   },
   infoItem: {},
   infoTitle: {
      fontFamily: "Lato-Bold",
      fontSize: 12,
      color: colors.gray
   },
   infoTextWrapper: {
      flexDirection: "row",
      alignItems: "flex-end",
      marginTop: 5
   },
   infoText: {
      fontFamily: "Lato-Bold",
      fontSize: 24,
      color: colors.orange
   },
   infoSubText: {
      fontFamily: "Lato-Bold",
      fontSize: 14,
      color: colors.gray
   },
   buttonWrapper: {
      marginHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: colors.orange,
      alignItems: "center",
      marginBottom: 30,
      marginTop: 30,
      borderRadius: 10
   },
   buttonText: {
      fontFamily: "Lato-Bold",
      fontSize: 16,
      color: colors.white
   }
})
export default Details
