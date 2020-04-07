export function trunc(text) {
    if (text !== null) {
        return text.length > 50 ? `${text.substr(0, 50)}...` : text;
    } else{
        return '';
    }
}

export function truncTitle(text) {
    if (text !== null) {
        return text.length > 50 ? `${text.substr(0, 50)}...` : text;
    } else{
        return '';
    }
}