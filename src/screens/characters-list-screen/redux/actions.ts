import {createRoutine} from 'redux-saga-routines';
import {GET_CHARACTERS} from './constants';

export const getCharacters : any = createRoutine(GET_CHARACTERS);
