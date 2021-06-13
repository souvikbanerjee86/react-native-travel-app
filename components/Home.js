import React from "react"
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   Image,
   FlatList,
   ImageBackground,
   TouchableOpacity
} from "react-native"
import colors from "./../assets/colors/colors"
import Feather from "react-native-vector-icons/Feather"
import Entypo from "react-native-vector-icons/Entypo"
import activitiesData from "./../assets/data/activitiesData"
import discoverCategoriesData from "./../assets/data/discoverCategoriesData"
import learnMoreData from "./../assets/data/learnMoreData"
import discoverData from "./../assets/data/discoverData"
import Profile from "../assets/images/person.png"

Feather.loadFont()
Entypo.loadFont()
const Home = ({ navigation }) => {
   const renderDiscoverItem = ({ item }) => {
      return (
         <TouchableOpacity>
            <ImageBackground
               source={item.image}
               style={styles.discoverItem}
               imageStyle={styles.discoverItemImage}
            >
               <Text style={styles.discoverItemTitle}>{item.title}</Text>
               <View style={styles.discoverItemLocationWrapper}>
                  <Entypo name="location-pin" size={20} color={colors.white} />
                  <Text style={styles.discoverItemLocationText}>
                     {item.location}
                  </Text>
               </View>
            </ImageBackground>
         </TouchableOpacity>
      )
   }
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
                  <Text
                     style={[
                        styles.discoverCategoryText,
                        { color: colors.orange }
                     ]}
                  >
                     All
                  </Text>
                  <Text style={styles.discoverCategoryText}>Destinations</Text>
                  <Text style={styles.discoverCategoryText}>Cites</Text>
                  <Text style={styles.discoverCategoryText}>Experiences</Text>
               </View>
               <View style={styles.discoverItemWrapper}>
                  <FlatList
                     data={discoverData}
                     keyExtractor={(item) => item.id}
                     renderItem={renderDiscoverItem}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  />
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
   discoverWrapper: {
      marginHorizontal: 20,
      marginTop: 20
   },
   discoverText: {
      fontFamily: "Lato-Bold",
      fontSize: 32
   },
   discoverCategoriesWrapper: {
      flexDirection: "row",
      marginTop: 10
   },
   discoverCategoryText: {
      marginRight: 15,
      color: colors.gray,
      fontSize: 16,
      fontFamily: "Lato-Regular"
   },
   discoverItemWrapper: {
      paddingTop: 20
   },
   discoverItem: {
      height: 250,
      width: 175,
      justifyContent: "flex-end",
      paddingHorizontal: 10,
      paddingVertical: 15,
      marginRight: 20
   },
   discoverItemImage: {
      borderRadius: 15
   },
   discoverItemTitle: {
      fontFamily: "Lato-Bold",
      color: colors.white,
      fontSize: 20
   },
   discoverItemLocationWrapper: {
      flexDirection: "row",
      marginTop: 10,
      alignItems: "center"
   },
   discoverItemLocationText: {
      marginLeft: 5,
      color: colors.white,
      fontFamily: "Lato-Regular"
   }
})

export default Home
