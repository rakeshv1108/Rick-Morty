import {createRoutine} from 'redux-saga-routines';
import {GET_LOCATIONS, GET_EPISODES} from './constants';

export const getLocations : any = createRoutine(GET_LOCATIONS);
export const getEpisodes : any = createRoutine(GET_EPISODES);
