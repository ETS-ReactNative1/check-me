import {
    HOME, API_FAIL
} from './../constants/constant';
import { URL, PROXY } from './../components/config';

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
