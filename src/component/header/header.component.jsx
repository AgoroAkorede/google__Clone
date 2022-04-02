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

import {ReactComponent as VideoIcon} from '../../assets/video-icon/video-icon.svg';

import './header.styles.scss'

const Header = () => {
    const [ { term }, dispatch ] = useResultContext();
    const { results } = GoogleSearch(term)
    console.log(results);
    const navigate = useNavigate();
    
  
    return (
        <div>
            <div className='search-page-top_section'>

                <div className='search-page_top'>
                <button>
                    <h1 className='search-page_top_header'>
                        Google
                    </h1>
                </button>
                    <SearchBox className='search-page-searchbox' value={ term } />
                </div>
                <ul className='search-page_sections'>
                        <button onClick={()=>{navigate('/search')}}> All <SearchIcon className='icons' /></button>
                        <button onClick={()=>{navigate('/news')}}> News <NewsIcon className='icons' /></button>
                        <button onClick={()=>{navigate('/images')}}> Images <ImagesIcon className='icons' /></button>
                    <button onClick={ () => { navigate('/shops') } }> Shopping<ShoppingIcon className='icons' /> </button>
                    <button onClick={()=>{navigate('/videos')}}> Video<VideoIcon className='icons' /> </button>
                        <li>More <MoreIcon className='icons' /></li>
                    </ul>
            </div>
        </div>
        )
}

export default Header