import { useEffect, useState } from "react";
import API_KEY from '../../ResultProvider/keys';

const CONTEXT_KEY="3dcc64d0da96a2049"

const GoogleSearch = (term) => {
    const [ results, setResults ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY} &cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json()).then(result => {
                    setResults(result)
                })
            
        }
        fetchData()
    }, [ term ])
    
    return{results}
    
}

export default GoogleSearch;