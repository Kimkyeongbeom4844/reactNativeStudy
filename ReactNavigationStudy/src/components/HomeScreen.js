import React from 'react';
import {View, Text, TouchableHighlight, useColorScheme} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${({colorSheme}) =>
    colorSheme === 'dark' ? 'black' : 'white'};
  /* justify-content: center; */
  align-items: center;
`;

const StyledText = styled.Text`
  color: ${({colorSheme}) => (colorSheme === 'dark' ? 'white' : 'black')};
`;

const StyledButton = styled.Text`
  background-color: ${({colorSheme}) =>
    colorSheme === 'dark' ? 'white' : 'black'};
  color: ${({colorSheme}) => (colorSheme === 'dark' ? 'black' : 'white')};
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px;
  font-weight: bold;
`;

const HomeScreen = ({navigation}) => {
  const colorSheme = useColorScheme();
  return (
    <Container colorSheme={colorSheme}>
      <StyledText colorSheme={colorSheme}>{colorSheme} mode</StyledText>
      <TouchableHighlight
        onPress={() => navigation.navigate('Details', {id: 27, name: '김경범'})}
        underlayColor="transparent">
        <StyledButton colorSheme={colorSheme}>Go to Detail..</StyledButton>
      </TouchableHighlight>
    </Container>
  );
};

export default HomeScreen;
