import { CharacterEpisodeObjType } from '../../../types/episodes-res-type';
import { CharacterLocationObjType } from '../../../types/location-res-type';
import {getEpisodes, getLocations} from './actions';

interface InitialStateType {
  isLoading: boolean;
  locationObj: CharacterLocationObjType;
  episodes: string[];
}
export const initialState: InitialStateType = {
  isLoading: false,
  locationObj: {
    id: 0,
    name: '',
    type: '',
    dimension: '',
    residents: [],
    url: '',
    created: ''
  },
  episodes: [],
};

const LocationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getLocations.TRIGGER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case getLocations.SUCCESS: {
      const data: CharacterLocationObjType = action.payload?.data;      
      return {
        ...state,
        isLoading: false,
        locationObj: data
      };
    }
    case getLocations.FAILURE: {
      return {
        ...state,
        isLoading: false,
        locationObj: {},
      };
    }
    case getLocations.REQUEST: {
      return {
        ...state,
        isLoading: action.payload?.isLoading || false,
      };
    }
    case getEpisodes.TRIGGER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case getEpisodes.SUCCESS: {
      const data: string[] = action.payload?.data;      
      return {
        ...state,
        isLoading: false,
        episodes: data
      };
    }
    case getEpisodes.FAILURE: {
      return {
        ...state,
        isLoading: false,
        episodes: [],
      };
    }
    case getEpisodes.REQUEST: {
      return {
        ...state,
        isLoading: action.payload?.isLoading || false,
      };
    }
    default: {
      return state;
    }
  }
};

export default LocationsReducer;
