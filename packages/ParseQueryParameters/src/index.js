const parseQueryParameters = (url) => {
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    const params = {};
    let match;
    while(match = regex.exec(url)) {
        params[match[1]] = match[2];
    }
    return params
}

export default parseQueryParameters;