export function trunc(text) {
    return text.length > 75 ? `${text.substr(0, 75)}...` : text;
}