import React,{useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider';

import GoogleSearch from '../../component/google-search/google-search.component';

import Header from '../../component/header/header.component'
import { ReactComponent as MoreIcon } from '../../assets/more-icon/more-icon.svg';
import { Loading } from '../../Loading';

import './searchpage.styles.scss'

import RecentSearches from 'recent-searches'

const SearchPage = () => {
    const [ { term }, dispatch ] = useResultContext();
    const { results, isLoading } = GoogleSearch(term)
    // save recent searches
  
    // let history = ''
    let history
    const historyArr = [];
        history += term
        historyArr.push(history)
        // console.log(historyArr)
 
        
const searches = new RecentSearches({
    ttl: 30, // Optional: ttl of searches in milliseconds, default to 24h (1000 * 60 * 60 * 24)
    limit: 30, // Optional: max number of entries that will be persisted, default is 50
    namespace:" recent searches", // Optional: custom localStorage namespace
    ranking: null // Optional: ranking strategy of recent searches, "PROXIMITY" | "TIME" | "PROXIMITY_AND_TIME", default is "PROXIMITY_AND_TIME"
})
    
    // Retrieve searches for a given query
const previousSearches = searches.getRecentSearches("recent search")
/* 
  [ 
    {query: "John", data: {...}, timestamp: ...},
    {query: "Marc John", data: {...}, timestamp: ...}
  ] 
*/

// To set a recent search
    let recent = searches.setRecentSearch("recent search", historyArr)

    // let allTheSearchesArr = searches.setRecentSearch("recent searches", recentArr)
    // const allTheSearches=allTheSearchesArr[0]
    
    let recentArr = []
    recentArr.push(previousSearches[0])
    console.log(recentArr)
    
//     console.log(previousSearches)
    // const saveSearch = [];
    // saveSearch.push(results)


    const navigate = useNavigate();
    if (isLoading) return <Loading />
    
    return (
        <div>
            <Header />

            {/* { term && (
                <p className="search-information">About {results?.queries.nextPage[ 0 ].totalResults } results in ({results?.searchInformation.formattedSearchTime })seconds for { term } </p>
            ) } */}
            
            {
                results?.items.map(item => (
                    <div  className='search-page_content'>
                        <a clasName='link' href={ item.link }>
                            { (
                                <img className='search-page_images' src={
                                    item.pagemap ?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                }

                                alt=""
                        />
                        )}
                         https//:{item.displayLink} <MoreIcon className='icons' />
                        </a>
                        <a href={item.link} className='search-page_resultTitle'>
                            <h2 className='header'>{ item.title }</h2>
                        </a>
                        <p className='search-page_resultContent'>{ item.snippet } </p>  
                    </div>
                    
                ))
                
            }
            }
            <Loading />
        </div>
    )
};

export default SearchPage