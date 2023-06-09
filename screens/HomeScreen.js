import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'

const HomeScreen = () => {
    const navigation=useNavigation();
    // as soon as the screnn mounts do something 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false, // we don't want the huge home page on our page on load
        })
        

    },[])
  return (
    <SafeAreaView>
      <Text className="text-red-500">HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen