import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text>LOGIN</Text>
      <View>
        <View>
          <Text>Username</Text>
          <TextInput
            className="border-2 w-[50%] border-dark-brown p-1"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></TextInput>
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            className="border-2 w-[50%] border-dark-brown p-1"
            value={password}
            onChangeText={(text) => setPassword(text)}
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
    </>
  );
};

export default Signup;
