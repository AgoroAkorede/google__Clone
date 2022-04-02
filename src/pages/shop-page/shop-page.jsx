
import React, { useState } from 'react';
import SearchBox from '../../component/search-box/search-box.component';
import {useNavigate,useLocation} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider' 
import Header from '../../component/header/header.component'

import SerpSearch from '../../component/serpApi'

import {ReactComponent as PlayIcon} from '../../assets/play-icon/play-icon.svg'


const ShopsPage = () => {
    const navigate=useNavigate()
    const [ { term }, dispatch ] = useResultContext();
    const location = useLocation().pathname;
    const { results } = SerpSearch(term);

    return (
        <div>
      <Header />
    
           <div className='videos-page'>
                { results?.product_result.map(item => (
                    <div>
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

export default ShopsPage
