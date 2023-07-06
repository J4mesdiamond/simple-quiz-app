import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
        <View>
            <Text>Result</Text>
        </View>
        <View style={styles.bannerContainer}>
        <Image 
            source={require("../assets/exam-schedule.png")}
            style={styles.banner}
            resizeMode='contain'
        />
      </View>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

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