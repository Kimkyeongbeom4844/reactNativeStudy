import React from "react";
import { ScrollView, View, Text, TextInput, Image } from "react-native";
import Cat from "./components/Cat";
import Pizza from "./components/Pizza";

const App = () => {
  return (
    <ScrollView>
      <Text>Hello, World</Text>
      <Cat alias="나비" />
      <Cat alias="냥이" />
      <Cat alias="유미" />
      <TextInput
        defaultValue="고양이 이름을 입력하세요"
        style={{ borderColor: "gray", borderWidth: 1 }}
      />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image
          source={require("./assets/favicon.png")}
          style={{ width: 200, height: 200 }}
        />
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat1.png",
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Pizza />
    </ScrollView>
  );
};

export default App;
