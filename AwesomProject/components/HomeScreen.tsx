import React, {useCallback} from 'react';
import {Button, Text, View, StyleSheet, useColorScheme} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  const color = useColorScheme();
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
      <Text
        style={{
          color: color === 'dark' ? 'white' : 'black',
        }}>
        매치업
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
