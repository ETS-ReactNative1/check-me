import {
    NEWS, API_FAIL
} from './../constants/constant';

function getNewsPromise() {
    return fetch(`https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=d253afcb475545a6ba2286d19ebba712&pageSize=50&page=1`)
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
