import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import AppLoading from 'expo-app-loading'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { theme } from './components/Theme'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import { store } from './store'

export default function App() {
  const isLoadingComplete = useCachedResources()
  if (!isLoadingComplete) {
    return (
      <AppLoading />
    ) 
  } else {
    return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
          <Navigation />
          <StatusBar style="dark"/>
        </ThemeProvider>
      </Provider>
    );
  }
}
