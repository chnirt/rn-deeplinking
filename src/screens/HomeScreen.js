import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('Detail', {userId: 6789})}
        title="Detail"
      />
    </View>
  );
}
