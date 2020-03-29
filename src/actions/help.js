import {
    HELP, API_FAIL
} from './../constants/constant';
import { URL } from './../components/config';

function getHelpDataPromise() {
    return fetch(`${URL}/help`)
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

export const getHelpData = () => (dispatch) => {
    return getHelpDataPromise()
        .then(resp => dispatch({
            type: HELP,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
