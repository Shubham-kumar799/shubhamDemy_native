//utils
import React from 'react';

//components
import { StyleSheet, View } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import ErrorText from './ErrorText';

const AppError = ({ refresh, text, errorText }) => {
  return (
    <View style={styles.container}>
      <IconButton icon="alert-circle-outline" size={50} />
      {errorText && <ErrorText errorText={errorText} />}
      {refresh && (
        <Button mode="text" onPress={() => refresh()}>
          {text ? text : 'Refresh'}
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default AppError;
