import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const deepLinkingUserId = route?.params?.params?.userId;
  const userId = route?.params?.userId;

  console.log(deepLinkingUserId, userId);

  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{userId ?? deepLinkingUserId}</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
    </View>
  );
}
