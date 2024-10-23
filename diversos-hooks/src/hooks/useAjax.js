import { useEffect, useState } from 'react'

export const useAjax = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    });

    const getData = async () => {
        setState({...state, loading: true});
        const response = await fetch(url);
        const data = await response.json();
        setState({data, loading: false});
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {data: state.data, loading: state.loading};
}
