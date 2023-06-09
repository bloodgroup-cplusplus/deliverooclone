import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { Image } from 'react-native'
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline"

const HomeScreen = () => {
    const navigation=useNavigation();
    // as soon as the screnn mounts do something 
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false, // we don't want the huge home page on our page on load
        })
        

    },[])
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500"></Text>
      {/*Header*/}
      <View className="flex-row pb-3 items-center mx-4  space-x-2">
        <Image
        source={{
            uri: "https://links.papareact.com/wru"
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full" 
        />
        {/* everything is flex column in react native */}
        <View className="flex-1">
            <Text className="font-bold text-gray-400 text-x5">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
        </View>

        <UserIcon size={35} clolor="#00CCBB"/>


      </View>
    </SafeAreaView>
  )
}

export default HomeScreen