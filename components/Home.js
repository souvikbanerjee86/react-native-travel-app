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
import learnMoreData from "./../assets/data/learnMoreData"
import discoverData from "./../assets/data/discoverData"
import Profile from "../assets/images/person.png"

Feather.loadFont()
Entypo.loadFont()

const Home = ({ navigation }) => {
   const renderDiscoverItem = ({ item }) => {
      return (
         <TouchableOpacity
            onPress={() => navigation.navigate("Details", { item: item })}
         >
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

   const renderActivityItem = ({ item }) => {
      return (
         <View
            style={[
               styles.activityItem,
               { marginLeft: item.id === "activities-1" ? 20 : 0 }
            ]}
         >
            <Image style={styles.activityItemImage} source={item.image} />
            <Text style={styles.activityItemTitle}>{item.title}</Text>
         </View>
      )
   }

   const renderLearnMoreItem = ({ item }) => {
      return (
         <ImageBackground
            source={item.image}
            style={[
               styles.learnMoreImage,
               { marginLeft: item.id === "learnMore-1" ? 20 : 0 }
            ]}
            imageStyle={styles.learnMoreImageStyle}
         >
            <Text style={styles.learnMoreTitle}>{item.title}</Text>
         </ImageBackground>
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

            {/* Activity Section*/}
            <View style={styles.activitiesWrapper}>
               <Text style={styles.activitiesText}>Activities</Text>
               <View style={styles.activityItemsWrapper}>
                  <FlatList
                     data={activitiesData}
                     keyExtractor={(item) => item.id}
                     renderItem={renderActivityItem}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  />
               </View>
            </View>

            {/* Learn More Section */}
            <View style={styles.learnMoreWrapper}>
               <Text style={styles.learnMoreText}>Learn More</Text>
               <View style={styles.learnMoreItemsWrapper}>
                  <FlatList
                     data={learnMoreData}
                     keyExtractor={(item) => item.id}
                     renderItem={renderLearnMoreItem}
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
      backgroundColor: colors.cream
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
   },
   activitiesWrapper: {
      marginTop: 20
   },
   activitiesText: {
      fontFamily: "Lato-Bold",
      fontSize: 24,
      color: colors.black,
      marginLeft: 20,
      marginBottom: 20
   },
   activityItem: {
      alignItems: "center",
      justifyContent: "flex-end",
      marginRight: 20
   },
   activityItemTitle: {
      marginTop: 5,
      color: colors.gray,
      fontFamily: "Lato-Bold"
   },
   learnMoreWrapper: {
      marginTop: 20
   },
   learnMoreText: {
      marginLeft: 20,
      fontFamily: "Lato-Bold",
      fontSize: 24,
      color: colors.black,
      marginBottom: 20
   },
   learnMoreItemsWrapper: {
      marginBottom: 20
   },
   learnMoreImage: {
      width: 150,
      height: 180,
      marginRight: 20,
      justifyContent: "flex-end"
   },
   learnMoreImageStyle: {
      borderRadius: 10
   },
   learnMoreTitle: {
      marginBottom: 20,
      marginLeft: 10,
      fontFamily: "Lato-Bold",
      fontSize: 16,
      color: colors.white
   }
})

export default Home
