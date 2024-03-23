type CharacterOriginType = {
  name: string;
  url: string;
};

type CharacterLocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

type CharacterDetailType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOriginType;
  location: CharacterLocationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type CharacterAPIResInfoObjType = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type CharacterAPIResType = {
  info: CharacterAPIResInfoObjType;
  results: CharacterDetailType[];
};

export type {
  CharacterDetailType,
  CharacterOriginType,
  CharacterLocationType,
  CharacterAPIResType,
  CharacterAPIResInfoObjType,
};
