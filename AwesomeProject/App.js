import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import Cat from "./components/Cat";

const App = () => {
  return (
    <View>
      <Text>Hello, World</Text>
      <Cat alias="나비" />
      <Cat alias="냥이" />
      <Cat alias="유미" />
      <TextInput
        defaultValue="고양이 이름을 입력하세요"
        style={{ borderColor: "gray", borderWidth: 1 }}
      />
      <Image
        source={require("./assets/favicon.png")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default App;
