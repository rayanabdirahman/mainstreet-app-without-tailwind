import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/Theme'
import useCachedResources from './hooks/useCachedResources'
import AppLoading from 'expo-app-loading'
import Navigation from './navigation'

export default function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    ) 
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );
  }
}
