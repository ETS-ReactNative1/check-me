import {
    NEWS, API_FAIL
} from './../constants/constant';

function aWeekAgo() {
    const today  = new Date();
    const sevenDaysAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));
    const result = `${sevenDaysAgo.getFullYear()}-${sevenDaysAgo.getMonth() + 1}-${sevenDaysAgo.getDate()}`;
    return result;
}

function getNewsPromise() {
    return fetch(`https://newsapi.org/v2/everything?q=COVID&from=${aWeekAgo()}&sortBy=popularity&apiKey=d253afcb475545a6ba2286d19ebba712&pageSize=50&page=1`)
        .then(data => {
            return new Promise(resolve => {
                resolve(data.json());
            })
                .then(finalData => {
                    return finalData;
                });
        })
        .catch(err => {
            return (err.response);
        });
}

export const getNews = () => (dispatch) => {
    return getNewsPromise()
        .then(resp => dispatch({
            type: NEWS,
            data: resp
        }))
        .catch(resp => dispatch({
            type: API_FAIL,
            data: resp
        }))
};
