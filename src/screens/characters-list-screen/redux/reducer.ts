import {
  CharacterAPIResInfoObjType,
  CharacterAPIResType,
  CharacterDetailType,
} from '../../../types/character-res-type';
import {getCharacters} from './actions';

interface InitialStateType {
  isLoading: boolean;
  arrCharacters: CharacterDetailType[];
  resInfo: CharacterAPIResInfoObjType;
}
export const initialState: InitialStateType = {
  isLoading: false,
  arrCharacters: [],
  resInfo: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
};

const CharactersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case getCharacters.TRIGGER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case getCharacters.SUCCESS: {
      const data: CharacterAPIResType = action.payload?.data;
      const isPaginationEnable = action.payload?.paginationEnable;      
      return {
        ...state,
        isLoading: false,
        resInfo: data?.info || {},
        arrCharacters: isPaginationEnable
          ? [...state?.arrCharacters, ...data?.results]
          : data?.results || [],
      };
    }
    case getCharacters.FAILURE: {
      return {
        ...state,
        isLoading: false,
        arrCharacters: [],
      };
    }
    case getCharacters.REQUEST: {
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

export default CharactersReducer;
