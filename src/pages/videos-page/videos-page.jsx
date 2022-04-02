import React, { useState } from 'react';
import SearchBox from '../../component/search-box/search-box.component';
import {useNavigate,useLocation} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider' 
import Header from '../../component/header/header.component'

import SerpSearch from '../../component/serpApi'

import {ReactComponent as PlayIcon} from '../../assets/play-icon/play-icon.svg'
import { Loading } from '../../Loading';
import './videos-page.styles.scss'


const VideosPage = () => {
    const navigate=useNavigate()
    const [ { term }, dispatch ] = useResultContext();
    const location = useLocation().pathname;
    const { results, isLoading } = SerpSearch(term);
    
    if (isLoading) return <Loading />

    return (
        <div>
      <Header />
    
           <div className='videos-page'>
                { results?.video_results.map(item => (
                    <div key={item.position}>
                            <p>{ item.displayed_link }</p>
                        <div className='video'>
                            <div className='video-item'>
                                <img className='image-item' key={ item.position } src={ item.thumbnail } />
                                <PlayIcon className='play-icon' />
                            <div>{ item.duration }</div>
                        </div>
                            <p>{item.title}</p>
                            <p>{ item.snippet }</p>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}

export default VideosPage
