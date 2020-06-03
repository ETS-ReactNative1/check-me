import {DISEASES, DISEASE, API_FAIL} from './../constants/constant';
import {URL} from './../components/config';

function getDeseasesPromise(language) {
  return fetch(`${URL}/diseases?lng=${language}`)
    .then(data => {
      return new Promise(resolve => {
        resolve(data.json());
      }).then(finalData => {
        return finalData;
      });
    })
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
}

export const getDeseases = language => dispatch => {
  return getDeseasesPromise(language)
    .then(resp =>
      dispatch({
        type: DISEASES,
        data: resp,
      }),
    )
    .catch(resp =>
      dispatch({
        type: API_FAIL,
        data: resp,
      }),
    );
};

export const setDesease = disease => dispatch => {
  dispatch({
    type: DISEASE,
    data: disease,
  });
};

export const changeDesease = () => dispatch => {
  dispatch({
    type: DISEASE,
    data: null,
  });
};
