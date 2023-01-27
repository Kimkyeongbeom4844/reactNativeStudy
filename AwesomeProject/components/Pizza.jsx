import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

const Pizza = () => {
  const [text, setText] = useState("r");
  const inputChange = (v) => {
    setText(v);
  };
  return (
    <>
      <TextInput
        defaultValue={text}
        placeholder="피자생성기"
        style={{
          borderColor: "black",
          borderWidth: 1,
        }}
        onChangeText={inputChange}
      />
      <Text>
        {text
          .trim()
          .split(" ")
          .map((v) => {
            if (v !== "") {
              return "🍕";
            }
          })
          .join(",")}
      </Text>
    </>
  );
};

export default Pizza;
