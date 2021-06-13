import React from "react"
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   Image
} from "react-native"
import colors from "./../assets/colors/colors"
import Feather from "react-native-vector-icons/Feather"
import activitiesData from "./../assets/data/activitiesData"
import discoverCategoriesData from "./../assets/data/discoverCategoriesData"
import learnMoreData from "./../assets/data/learnMoreData"
import discoverData from "./../assets/data/discoverData"
import Profile from "../assets/images/person.png"

Feather.loadFont()
const Home = ({ navigation }) => {
   return (
      <View style={styles.container}>
         <ScrollView>
            <SafeAreaView>
               <View style={styles.menuWrapper}>
                  <Feather name="menu" size={32} style={styles.menuIcon} />
                  <Image source={Profile} style={styles.profileImage} />
               </View>
            </SafeAreaView>
            <View style={styles.discoverWrapper}>
               <Text style={styles.discoverText}>Discover</Text>
               <View style={styles.discoverCategoriesWrapper}>
                  <Text style={styles.discoverCategoryText}>All</Text>
                  <Text style={styles.discoverCategoryText}>Destinations</Text>
                  <Text style={styles.discoverCategoryText}>Cites</Text>
                  <Text style={styles.discoverCategoryText}>Experiences</Text>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      color: colors.white
   },
   menuWrapper: {
      marginHorizontal: 20,
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
   },
   menuIcon: {},
   profileImage: {
      width: 50,
      height: 50,
      borderRadius: 10
   },
   discoverWrapper: {},
   discoverText: {},
   discoverCategoriesWrapper: {},
   discoverCategoryText: {}
})

export default Home
