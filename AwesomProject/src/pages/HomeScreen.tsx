import React, {useCallback, useState, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  Switch,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import S from '../assets/styles';

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<any, 'Home'>) {
  const color = useColorScheme();
  const isFocused = useIsFocused();
  const [isOn, setIsOn] = useState(false);
  // useEffect(() => {
  //   console.log('홈mount');
  //   return () => {
  //     console.log('홈unmount');
  //   };
  // }, []);
  useFocusEffect(
    useCallback(() => {
      console.log('홈Mount');
      return () => {
        console.log('홈Unmount');
      };
    }, []),
  );
  return (
    <View
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
        gap: 5,
      }}>
      <Text style={S.h2}>Home</Text>
      <Button
        title="프로필 페이지로"
        onPress={() => navigation.navigate('Profile', {name: '김경범'})}
      />
      <Button
        title="카운터 페이지로"
        onPress={() => navigation.navigate('Counter')}
      />
      <Text style={{...styles.h3, color: color === 'dark' ? 'white' : 'black'}}>
        {isFocused ? 'focused' : 'unfocused'}
      </Text>
      <Switch
        value={isOn}
        onChange={() => setIsOn(v => !v)}
        thumbColor={isOn ? 'green' : 'gray'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  h3: {
    fontStyle: 'italic',
  },
});
