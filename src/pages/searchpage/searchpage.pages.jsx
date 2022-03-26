import React,{useEffect} from 'react';
import SearchBox from '../../component/search-box/search-box.component';
import {useNavigate} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider';

import GoogleSearch from '../../component/google-search/google-search.component';

import { ReactComponent as NewsIcon } from '../../assets/news-icon/news-icon.svg';

import { ReactComponent as ImagesIcon } from '../../assets/images-icon/images-icon.svg';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon/shopping-icon.svg';

import { ReactComponent as MoreIcon } from '../../assets/more-icon/more-icon.svg';

import { ReactComponent as SearchIcon } from '../../assets/search-icon/search-icon.svg';

import './searchpage.styles.scss'

const SearchPage = () => {
    const [ { term }, dispatch ] = useResultContext();
    const { results } = GoogleSearch(term)
    console.log(results);

    const navigate = useNavigate();

    // To check if the resultss is Renedered
    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('useEffect is ran')
            
    //         // Navigate to error-404 page
    //         navigate('/')
    //     }, 5000);
    // },[])
    
    return (
        <div>
            <div className='searh-page-top_section'>

                <div className='search-page_top'>
                <button onClick={ () => {
            navigate('/')
        } }>
                    <h1 className='search-page_top_header'>
                        Google
                    </h1>
                </button>
                    <SearchBox className='search-page-searchbox' value={ term } />
                </div>
                <ul className='search-page_sections'>
                        <li>All <SearchIcon className='icons' /></li>
                        <li>News <NewsIcon className='icons' /></li>
                        <li>Images <ImagesIcon className='icons' /></li>
                        <li>Shopping<ShoppingIcon className='icons' /> </li>
                        <li>More <MoreIcon className='icons' /></li>
                    </ul>
         </div>

            { term && (
                <p className="search-information">About {results?.queries.nextPage[ 0 ].totalResults } results in {results?.searchInformation.formattedSearchTime }s for { term } </p>
            ) }
            
            {
                results?.items.map(item => (
                    <div className='search-page_content'>
                        <a href={ item.link }>
                            { (
                                <img className='search-page_images' src={
                                    item.pagemap ?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                }

                                alt=""
                        />
                        )}
                        {item.displayLink} 🔻
                        </a>
                        <a href={item.link}>
                            <h2 className='search-page_resultTitle'>{item.title}</h2>
                        </a>
                        <p className='search-page_resultContent'>{ item.snippet }</p>
                        
                    </div>
                ))
            }
        </div>
    )
};

export default SearchPage