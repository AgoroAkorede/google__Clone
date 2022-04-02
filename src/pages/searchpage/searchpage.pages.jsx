import React,{useEffect} from 'react';
import {useNavigate,useLocation} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider';

import GoogleSearch from '../../component/google-search/google-search.component';

import Header from '../../component/header/header.component'
import { ReactComponent as MoreIcon } from '../../assets/more-icon/more-icon.svg';
import { Loading } from '../../Loading';

import './searchpage.styles.scss'

const SearchPage = () => {
    const [ { term }, dispatch ] = useResultContext();
    const { results, isLoading } = GoogleSearch(term)
    // save recent searches
    const saveSearch = [];
    saveSearch.push(results)

    const navigate = useNavigate();
    if (isLoading) return <Loading />
    
    return (
        <div>
            <Header />

            { term && (
                <p className="search-information">About {results?.queries.nextPage[ 0 ].totalResults } results in ({results?.searchInformation.formattedSearchTime })seconds for { term } </p>
            ) }
            
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