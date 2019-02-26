export const GET_BUILDINGS = 'GET_BUILDINGS';
import axios from 'axios';
import config from '../../config';

export const getBuildings = () => dispatch => {
  axios
    .get(`${config.api}/buildings`)
    .then(res => dispatch({ type: GET_BUILDINGS, buildings: res.data }))
    .catch(err => console.log(err));
};
