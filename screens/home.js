import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = () => {
  return (
    <View>
      <Title/>
      <View style={styles.bannerContainer}>
        <Image 
            source={require("../assets/exam-schedule.png")}
            style={styles.banner}
            resizeMode='contain'
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home


const styles = StyleSheet.create({
   banner:{
    width: 375,
    height: 300
   },
   bannerContainer:{
    justifyContent: 'center',
    alignItems: 'center'
   }
});