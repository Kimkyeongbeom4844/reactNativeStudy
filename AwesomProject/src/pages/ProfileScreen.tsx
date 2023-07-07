import React, {useEffect, useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  RefreshControl,
  useColorScheme,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFocusEffect} from '@react-navigation/native';
import S from '../assets/styles';

function ProfileScreen({
  navigation,
  route,
}: NativeStackScreenProps<any, 'Profile'>) {
  const color = useColorScheme();
  const [isRefreshing, setIsRefreshing] = useState(false);
  useFocusEffect(
    useCallback(() => {
      console.log('프로필Mount');
      return () => {
        console.log('프로필Unmount');
      };
    }, []),
  );
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);
  return (
    <ScrollView
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
        gap: 5,
      }}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <Text style={S.h2}>Profile</Text>
      <Text
        style={{
          color: color === 'dark' ? 'white' : 'black',
        }}>
        여기는 {route.params?.name ?? '무제'}의 프로필입니다
      </Text>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <View
          style={{
            backgroundColor: 'gray',
          }}>
          <Text style={{color: color === 'dark' ? 'white' : 'black'}}>
            뒤로가기
          </Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
