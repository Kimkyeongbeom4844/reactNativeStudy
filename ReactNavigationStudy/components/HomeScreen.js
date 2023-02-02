import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('Details', {id: 27, name: '김경범'})
        }>
        <Text style={styles.button}>Go to Detail..</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
