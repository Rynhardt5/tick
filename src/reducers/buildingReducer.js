import { GET_BUILDINGS } from '../actions';

export const buildings = (state = [], action) => {
  switch (action.type) {
    case GET_BUILDINGS:
      return [...state, ...action.buildings];
    default:
      return state;
  }
};
