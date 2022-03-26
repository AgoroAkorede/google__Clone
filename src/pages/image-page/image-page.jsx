import React from 'react'
import SearchBox from '../../component/search-box/search-box.component';
import {useNavigate} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider' 

import GoogleSearch from '../../component/google-search/google-search.component';

import { ReactComponent as NewsIcon } from '../../assets/news-icon/news-icon.svg';

import { ReactComponent as ImagesIcon } from '../../assets/images-icon/images-icon.svg';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-icon/shopping-icon.svg';

import { ReactComponent as MoreIcon } from '../../assets/more-icon/more-icon.svg';

import { ReactComponent as SearchIcon } from '../../assets/search-icon/search-icon.svg';

const ImagesPage = () => {
    const navigate=useNavigate()
    const [ { term }, dispatch ] = useResultContext();
    const { results } = GoogleSearch(term)

    return (
        <div>
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
    )
}

export default ImagesPage