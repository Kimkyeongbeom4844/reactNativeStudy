import React, { useState } from "react";
import { Text, Button } from "react-native";

const Cat = ({ alias }) => {
  const [toggle, setToggle] = useState(false);
  const buttonPress = () => {
    setToggle((v) => !v);
  };
  return (
    <>
      <Text>This cat name is "{alias}"</Text>
      <Button
        title={toggle ? "냠냠" : "먹이를 주세요"}
        color={"red"}
        onPress={buttonPress}
        disabled={toggle}
      />
    </>
  );
};

export default Cat;
