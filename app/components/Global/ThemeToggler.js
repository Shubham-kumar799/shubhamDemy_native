//utils
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

//Components
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const ThemeToggler = () => {
  const { isThemeDark, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <IconButton
        icon={isThemeDark ? 'weather-sunny' : 'weather-night'}
        color={isThemeDark ? 'white' : 'black'}
        onPress={() => toggleTheme()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ThemeToggler;
