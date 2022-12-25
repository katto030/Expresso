import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-col">
      <View className="bg-dark-brown h-[50%] flex-col">
        <View className="flex-1 justify-center items-center">
          <View className="bg-white h-20 w-20 justify-center rounded-full">
            <Image
              className="w-10 self-center"
              source={require("../assets/coffee.png")}
            />
          </View>
          <Text className="text-5xl text-white">Expresso</Text>
          <Text className="text-md text-white">
            Grab a coffee and study together
          </Text>
        </View>
      </View>
      <View className="bg-white h-[60%]">
        <Text>LOGIN</Text>
        <View>
          <View>
            <Text>Username</Text>
            <TextInput
              className="border-2 w-[50%] border-dark-brown p-1"
              value={email}
              onChangeText={(text) => setEmail(email)}
            ></TextInput>
          </View>
          <View>
            <Text>Password</Text>
            <TextInput
              className="border-2 w-[50%] border-dark-brown p-1"
              value={password}
              onChangeText={(text) => setEmail(password)}
              secureTextEntry
            ></TextInput>
          </View>
        </View>
        <Pressable
          className="bg-dark-brown w-[30%] p-2 rounded-md items-center"
          onPress={() => {}}
        >
          <Text className="text-white text-[16px] ">Login</Text>
        </Pressable>
        <View className="justify-center">
          <Text className="text-dark-brown">OR</Text>
        </View>
        <View className="flex-row">
          <View className="bg-dark-brown h-5 w-5 rounded-full">
            <Text>G</Text>
          </View>
          <View className="bg-dark-brown h-5 w-5 rounded-full">
            <Text>F</Text>
          </View>
          <View className="bg-dark-brown h-5 w-5 rounded-full">
            <Text>ln</Text>
          </View>
        </View>
        <View className="flex-row justify-end">
          <Text>Don't have an account? </Text>
          <Text className="underline">Sign Up</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
