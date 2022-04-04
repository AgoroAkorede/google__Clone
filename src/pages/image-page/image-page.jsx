import React, { useState } from 'react';
import SearchBox from '../../component/search-box/search-box.component';
import {useNavigate} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider' 

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Header from '../../component/header/header.component'
import './image-page.scss'

import SerpSearch from '../../component/serpApi'
import { Loading } from '../../Loading';


const ImagesPage = () => {
    const navigate=useNavigate()
    const [ { term }, dispatch ] = useResultContext();
    const { results,isLoading } = SerpSearch(term);


    const truncate = (word) => {
        return `${word.trim().slice(0,30)} ...`
    }
    
    if (isLoading) return <Loading />

    console.log(results)

    return (
        <div>
            <Header />

            {/* This is for the suggested-searches images  but it is temporarily unavailable */ }
            
            {/* <div className='suggested-searches'>
                {results?.suggested_searches.map(item => (
                        <a href={item.serpapi_link} className='card'>
                            <img className='image' src={item.thumbnail} />
                            <p className='card-name'>{ item.name }</p>
                        </a>
                    ))
                    }
            </div> */}
           
            <div className='images-page'>
                { results?.images_results.map(item => (
                    <div key={item.position}>
                        <div className='image'>
                            <img className='image-item' key={ item.position } src={ item.thumbnail} />
                        </div>
                        <p className='image-title'> { truncate(item.title)}</p>
                        <a className='image_link' href={ item.link }>{item.source }</a>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default ImagesPage