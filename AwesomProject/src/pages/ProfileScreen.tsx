import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import S from '../assets/styles';

function ProfileScreen({
  navigation,
  route,
}: NativeStackScreenProps<any, 'Profile'>) {
  const color = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
        gap: 5,
      }}>
      <Text style={S.h2}>Profile</Text>
      <Text
        style={{
          color: color === 'dark' ? 'white' : 'black',
        }}>
        여기는 {route.params?.name ?? '무제'}의 프로필입니다
      </Text>
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <View
          style={{
            backgroundColor: 'gray',
          }}>
          <Text style={{color: color === 'dark' ? 'white' : 'black'}}>
            뒤로가기
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
