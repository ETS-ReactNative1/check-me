import {
  STATISTICS,
  CAMER_STATS,
  COUNTRIES,
  API_FAIL,
} from './../constants/constant';
import {URL, STATS} from './../components/config';

function getStatisticsDataPromise(language) {
  return fetch(`${URL}/statistics?lng=${language}`)
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

export const getStatisticsData = language => dispatch => {
  return getStatisticsDataPromise(language)
    .then(resp =>
      dispatch({
        type: STATISTICS,
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

function getCamerDataPromise() {
  return fetch(`${STATS}/cameroon`)
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

export const getCamerData = () => dispatch => {
  return getCamerDataPromise()
    .then(resp =>
      dispatch({
        type: CAMER_STATS,
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

function getWorldDataPromise() {
  return fetch(`${STATS}?sort=country`)
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

export const getWorldData = () => dispatch => {
  return getWorldDataPromise()
    .then(resp =>
      dispatch({
        type: COUNTRIES,
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
