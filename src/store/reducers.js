import {combineReducers} from 'redux';
import CharactersReducer from '../screens/characters-list-screen/redux/reducer';
import LocationsReducer from '../screens/character-detail-screen/redux/reducer';

export const combinedReducers = combineReducers({
  characters: CharactersReducer,
  locations: LocationsReducer,
});
