import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Header from './src/components/Header';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.wrap}>
      <Header />
      <View>
        <Text
          style={{
            fontFamily: 'Agbalumo-Regular',
          }}>
          본문
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    zIndex: 0,
  },
});

export default App;
