import React, {useCallback} from 'react';
import {Button, Text, View, StyleSheet, useColorScheme} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<any, 'Home'>) {
  const color = useColorScheme();
  const isFocused = useIsFocused();
  useFocusEffect(
    useCallback(() => {
      console.log('componentDidMount');
      return () => {
        console.log('componentWillUnmount');
      };
    }, []),
  );
  return (
    <View
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
      }}>
      <Button
        title="프로필 페이지로"
        onPress={() => navigation.navigate('Profile', {name: '김경범'})}
      />
      <Button
        title="카운터 페이지로"
        onPress={() => navigation.navigate('Counter')}
      />
      <Text
        style={{
          color: color === 'dark' ? 'white' : 'black',
        }}>
        {isFocused ? 'focused' : 'unfocused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
