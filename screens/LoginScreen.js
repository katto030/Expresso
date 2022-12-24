import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigation = useNavigation();
  const [user, onChangeUser] = useState()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  return (
    <SafeAreaView className="flex-col">
      <View className="bg-dark-brown h-[75%]">
        <View className="flex-1 justify-center items-center">
          <View className="bg-white h-20 w-20 justify-center rounded-full">
            <Image
              className="w-10 self-center"
              source={require('../assets/coffee.png')}
            />
          </View>
          <Text className="text-5xl text-white">Expresso</Text>
          <Text className="text-md text-white">Grab a coffee and study together</Text>
        </View>
      </View>
      <View className="bg-white">
        <Text>LOGIN</Text>

      </View>
    </SafeAreaView>
  )
}

export default LoginScreen