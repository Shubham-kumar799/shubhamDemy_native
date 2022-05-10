import React from 'react';

//components
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

//utils
import { staticTheme } from '../../config/theme';

const ErrorText = ({ errorText }) => {
  return <Text style={styles.text}>{errorText}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: staticTheme.colors.error,
  },
});

export default ErrorText;
