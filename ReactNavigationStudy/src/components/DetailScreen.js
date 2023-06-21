import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const DetailScreen = ({navigation}) => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.button}>Go to Home..</Text>
      </TouchableOpacity>
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
  h1: {
    fontSize: 25,
    marginVertical: 10,
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

export default DetailScreen;
