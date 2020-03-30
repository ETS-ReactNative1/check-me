import {
    HOME, API_FAIL, RESET_HOME
} from './../constants/constant';
import { URL } from './../components/config';

function getHomeDataPromise() {
    return fetch(`${URL}/home`)
        .then(data => {
            return new Promise(resolve => {
                resolve(data.json());
            })
                .then(finalData => {
                    return finalData;
                });
        })
        .catch(err => {
            console.log(err.response)
            return (err.response);
        });
}

export const getHomeData = () => (dispatch) => {
    return getHomeDataPromise()
        .then(resp => dispatch({
            type: HOME,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};

// export const resetHomeData = () => (dispatch) => {
//     dispatch({
//         type: RESET_HOME,
//         data: null
//     })
// };
