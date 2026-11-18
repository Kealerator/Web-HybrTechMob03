import React from 'react'
import { View, Text } from 'react-native'
import globalStyles from '../styles'
import { Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
	  <Button mode="contained" onPress={() => {navigation.navigate("Details")}}>
		  Go to details
	  </Button>
    </View>
  );
}
