import {ThemeProvider} from '@shopify/restyle';
import {useColorScheme} from 'react-native';
import {ThemeMode, getTheme} from './index';
import {useAppState} from '../hooks/useAppState';
import React from 'react';

type AppThemeProviderProps = {
  children: React.ReactNode;
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const isSystemDarkMode = useColorScheme() === 'dark';
  const {preferences} = useAppState();
  const {theme} = preferences;

  let activeThemeType: ThemeMode = 'light';

  if (theme === 'default') {
    activeThemeType = isSystemDarkMode ? 'dark' : 'light';
  } else {
    activeThemeType = theme as ThemeMode;
  }

  const activeTheme = getTheme(activeThemeType);
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};
