import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useColorScheme,
} from 'react-native';

function ProfileScreen({navigation, route}) {
  const color = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
      }}>
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
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({});
