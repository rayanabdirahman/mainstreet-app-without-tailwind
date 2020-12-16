import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native'

export function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEED</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
