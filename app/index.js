//utils
import { ThemeContext } from './context/ThemeContext';
import { CombinedDarkTheme, CombinedDefaultTheme } from './config/theme';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';

//components
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useMemo, useCallback } from 'react';
import { DrawerNavigator } from './navigation';

const MyApp = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <ReduxProvider store={store}>
      <ThemeContext.Provider value={preferences}>
        <NavigationContainer theme={theme}>
          <PaperProvider theme={theme}>
            <DrawerNavigator />
            <StatusBar style={isThemeDark ? 'light' : 'dark'} />
          </PaperProvider>
        </NavigationContainer>
      </ThemeContext.Provider>
    </ReduxProvider>
  );
};

export default MyApp;
