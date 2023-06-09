import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { uuid } from 'react-native-easy-uuid';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Result: {uuid()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
