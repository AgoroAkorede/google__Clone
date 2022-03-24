import React from 'react';
import SearchBox from '../../component/search-box/search-box.component'
import './homepage.styles.scss'
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate=useNavigate()
    const search = (e) => {
        e.preventDefault()
        navigate('/search')
    };
    return (
        <div className='homepage'>
            <h1 className='homepage-header'>Google</h1>

            <SearchBox placeholder={ 'Search Google or Type a URL' } 
            />
            
            <ul className='homepage-buttons'>
                <button onClick={search} className='homepage-button'>Google Search</button>
                <button className='homepage-button'>I'm feeling lucky</button>
           </ul>
      </div>
    )
}
export default Homepage