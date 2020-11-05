import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const deepLinkingCode = route?.params?.params?.code;
  const code = route?.params?.code;

  console.log(deepLinkingCode, code);

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{code ?? deepLinkingCode}</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
