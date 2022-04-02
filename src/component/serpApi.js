import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom'
import { Loading } from '../Loading';

const SerpSearch = (term) => {
  
  const [ results, setResults ] = useState(null);
  const location = useLocation()
  const [ isLoading, setIsLoading ] = useState(true)
  let API

  useEffect(() => {
    setIsLoading(true)
    if (location.pathname==='/videos') {
      API=`
      https://serpapi.com/search.json?q=${term}&tbm=vid&hl=en&gl=us&api_key=390245999c8c1a2cb6d49f6180b850cf3f2a8803b44483529a574c4539af238e
      `
    }
    if (location.pathname==='/images') {
      API=`
      https://serpapi.com/search.json?q=${term}&tbm=isch&ijn=0&api_key=390245999c8c1a2cb6d49f6180b850cf3f2a8803b44483529a574c4539af238e
      `
    }
    if (location.pathname==='/news') {
      API=`
      https://serpapi.com/search.json?q=${term}&tbm=nws&location=Dallas&api_key=390245999c8c1a2cb6d49f6180b850cf3f2a8803b44483529a574c4539af238e
      `
    }
    if(location.pathname==='/shops'){
      API = `
      https://serpapi.com/search.json?q=${term}&api_key=390245999c8c1a2cb6d49f6180b850cf3f2a8803b44483529a574c4539af238e`

    }
    // LIVE_CALL
  const fetcher = async () => {
    fetch(
        API
    )
    .then(response => response.json())
      .then(result => {
        setResults(result)
        setIsLoading(false)
      })
    .catch(err => console.log(err))
}

    fetcher()
  }, [ term, location.pathname ])
  

  return{results, isLoading}


}

export default SerpSearch