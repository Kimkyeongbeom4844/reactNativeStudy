/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import Cat from './components/Cat';

export default function App(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const onChangeText = (text: string) => {
    setInputText(text);
  };
  const onPressEvent = () => console.log(inputText);
  return (
    <>
      <Text>헤더</Text>
      <ScrollView>
        <Text>개발진스</Text>
        <View>
          <Text>경범진스</Text>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/82068552?v=4',
              width: 200,
              height: 200,
            }}
            style={{marginVertical: 20}}
          />
        </View>
        <TextInput
          style={styles.inputText}
          value={inputText}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <Button onPress={onPressEvent} title="버니즈" />
        </View>
        <Cat name="네코" />
        <Cat name="버니즈" />
      </ScrollView>
      <Text>푸터</Text>
    </>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});
