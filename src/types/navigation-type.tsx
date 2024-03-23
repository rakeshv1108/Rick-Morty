import {ScreenConstants} from '../constants';
import {CharacterDetailType} from './character-res-type';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type PrimaryStackParamList = {
  [ScreenConstants.CHARACTERS_LIST_SCREEN]: undefined;
  [ScreenConstants.CHARACTER_DETAIL_SCREEN]: {item: CharacterDetailType};
};

type CharacterListScreenNavType = NativeStackScreenProps<
  PrimaryStackParamList,
  ScreenConstants.CHARACTERS_LIST_SCREEN
>;

type CharacterDetailScreenNavType = NativeStackScreenProps<
  PrimaryStackParamList,
  ScreenConstants.CHARACTER_DETAIL_SCREEN
>;

export type {
  PrimaryStackParamList,
  CharacterListScreenNavType,
  CharacterDetailScreenNavType,
};
