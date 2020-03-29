export function trunc(text) {
    if (text !== null) {
        return text.length > 75 ? `${text.substr(0, 75)}...` : text;
    } else{
        return '';
    }
}

export function truncTitle(text) {
    if (text !== null) {
        return text.length > 55 ? `${text.substr(0, 55)}...` : text;
    } else{
        return '';
    }
}