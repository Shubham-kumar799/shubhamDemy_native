//utils
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import { colors } from './colors';
import merge from 'deepmerge';
import { sizes } from './sizes';
import { fonts, fontWeights } from './fonts';
import Constants from 'expo-constants';

const AppNavigationDefaultTheme = {
  ...NavigationDefaultTheme,
  // colors: {
  //   // ...NavigationDefaultTheme.colors,
  //   // primary: colors.primary,
  //   // background: colors.background,
  // },
};

const AppNavigationDarkTheme = {
  ...NavigationDarkTheme,
  // colors: {
  //   ...NavigationDarkTheme.colors,
  //   primary: colors.primary,
  // },
};

const AppPaperDefaultTheme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    error: colors.danger,
  },
};

const AppPaperDarkTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    error: colors.danger,
  },
};

export const CombinedDefaultTheme = merge(
  AppPaperDefaultTheme,
  AppNavigationDefaultTheme
);
export const CombinedDarkTheme = merge(
  AppPaperDarkTheme,
  AppNavigationDarkTheme
);

export const staticTheme = {
  sizes,
  fonts,
  fontWeights,
  statusBarHeight: Constants.statusBarHeight,
  colors,
};
