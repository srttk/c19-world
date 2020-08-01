import fetch from 'isomorphic-unfetch'
export const API_BASE_URL = `https://covid19.mathdro.id`


export default function fetcher(url='') {

    const requestURL = url ? `${API_BASE_URL}${url}` : API_BASE_URL
    
    return fetch(requestURL).then(r => r.json())
}