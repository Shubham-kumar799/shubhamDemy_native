//utils
import React from 'react';

//components
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator animating={true} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default Loader;
