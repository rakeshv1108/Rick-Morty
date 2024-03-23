/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, StatusBar, ViewStyle} from 'react-native';
import {colors} from './src/theme';
import {AppNavigationContainer} from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: colors.white,
    flex: 1,
  } as ViewStyle;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigationContainer />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
