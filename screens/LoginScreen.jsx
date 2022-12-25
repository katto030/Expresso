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
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#4c69a5",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView className="flex-col">
        <View className="bg-dark-brown h-[50%] flex-col">
          <View className="flex-1 justify-center items-center">
            <View className="bg-white h-20 w-20 justify-center rounded-full">
              <Image
                className="w-10 self-center"
                source={require("../assets/coffee.png")}
              />
            </View>
            <Text className="text-6xl text-white">Expresso</Text>
            <Text className="text-md font-thin text-white">
              Grab a coffee and study together
            </Text>
          </View>
        </View>
        <View className="bg-white h-[60%] w-[100%] flex-col items-center">
          <Text className="text-[18px] mb-1.5">LOGIN</Text>
          <View className="w-[100%] flex-col items-center">
            <View className="flex-col w-[65%] items-center my-0.5">
              <Text className="self-start">Username: </Text>
              <TextInput
                className="border-2 w-[100%] border-dark-brown p-1"
                value={email}
                onChangeText={(text) => setEmail(text)}
              ></TextInput>
            </View>
            <View className="flex-col w-[65%] items-center my-0.5">
              <Text className="self-start">Password:</Text>
              <TextInput
                className="border-2 w-[100%] border-dark-brown p-1"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
              ></TextInput>
            </View>
          </View>
          <Pressable
            className="bg-dark-brown mb-2 mt-4 w-[40%] p-2 rounded-[15px] items-center"
            onPress={() => {}}
          >
            <Text className="text-black text-[16px] ">LOGIN</Text>
          </Pressable>
          <View className="justify-center border-[1px] border-dark-brown my-1 px-4 py-0.5">
            <Text className="text-dark-brown">OR</Text>
          </View>
          <View className="w-[50%] flex-row my-2 justify-around">
            <View className="bg-dark-brown h-8 w-8 rounded-full align-center justify-center">
              <Text className="self-center font-bold">G</Text>
            </View>
            <View className="bg-dark-brown h-8 w-8 rounded-full align-center justify-center">
              <Text className="self-center font-bold">F</Text>
            </View>
            <View className="bg-dark-brown h-8 w-8 rounded-full align-center justify-center">
              <Text className="self-center font-bold">ln</Text>
            </View>
          </View>
          <View className="flex-row justify-end">
            <Text>Don't have an account? </Text>
            <Text className="underline">Sign Up</Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
