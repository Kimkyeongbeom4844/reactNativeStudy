import React from 'react';
import {Text} from 'react-native';

export default function Cat({name}: {name: string}) {
  return <Text>{name ?? '고양이'}</Text>;
}
