import { useEffect, useState } from "react";
import API_KEY from '../../ResultProvider/keys';
import {useNavigate} from 'react-router-dom'

const CONTEXT_KEY="3dcc64d0da96a2049"

const GoogleSearch = (term) => {
    const [ results, setResults ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true)
    const navigate=useNavigate()
    
    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(response => response.json())
                .then(result => {
                    setResults(result)
                    
                    setIsLoading(false)
                })
                .catch(() => { navigate("/404") });
            }
            fetchData()
        
    }, [ term ])
    
    return{results, isLoading}
    
}

export default GoogleSearch;