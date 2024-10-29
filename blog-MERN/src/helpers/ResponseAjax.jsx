export const ResponseAjax = async (url, method, bodyData, files = false) => {
    let loading = true;
    let options = {};
    
    if(method === 'GET' || method === 'DELETE'){
        options.method = method;
    }
    
    if(method === 'POST' || method === 'PUT'){
        if(files){
            options = {
                method: method,
                body: bodyData
            };
        }else{
            options = {
                method: method,
                body: JSON.stringify(bodyData),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }
    
    const response = await fetch(url, options);
    const data = await response.json();
    loading = false;
    
    return {data, loading};
}
