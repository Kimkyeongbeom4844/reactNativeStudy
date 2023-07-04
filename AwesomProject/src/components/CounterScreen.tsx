import React from 'react';
import {
  View,
  Text,
  useColorScheme,
  TouchableHighlight,
  StyleSheet,
  Button,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../stores/features/counter';
import type {RootState} from '../stores/store';

export default function CounterScreen({
  navigation,
}: NativeStackScreenProps<any, 'Counter'>) {
  const counterReducer = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  const color = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: color === 'dark' ? 'black' : 'white',
      }}>
      <Button title="홈으로" onPress={() => navigation.navigate('Home')} />
      <Text>{counterReducer.value}</Text>
      <TouchableHighlight onPress={() => dispatch(increment())}>
        <View style={styles.button}>
          <Text>증가</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => dispatch(decrement())}>
        <View style={{...styles.button, backgroundColor: '#196ff2'}}>
          <Text>감소</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#53baef',
  },
});
