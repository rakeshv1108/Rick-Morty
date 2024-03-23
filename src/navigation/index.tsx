/**
 * Whole app start with this stack navigator (Base navigator or Primary navigator).
 */
import React from 'react';
import {PrimaryStackParamList} from '../types/navigation-type';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenConstants} from '../constants';
import {CharacterDetailScreen, CharacterListScreen} from '../screens';

const Stack = createNativeStackNavigator<PrimaryStackParamList>();

const AppNavigationContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenConstants.CHARACTERS_LIST_SCREEN}
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenConstants.CHARACTER_DETAIL_SCREEN}
        component={CharacterDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {AppNavigationContainer};
