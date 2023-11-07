import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';

const App = (): JSX.Element => {
  return (
    <View style={styles.wrap}>
      <Header />
      <Text>본문</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default App;
