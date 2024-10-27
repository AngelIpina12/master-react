export const ResponseAjax = async (url, method, body = '') => {
    let loading = true;
    let options = {
        method: 'GET',
    }
    if(method == 'GET' || method == 'DELETE') options.method = method;
    if(method == 'POST' || method == 'PUT') {
        options.method = method;
        options.headers = {
            'Content-Type': 'application/json'
        };
        options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    loading = false;
    return {data, loading};
}
