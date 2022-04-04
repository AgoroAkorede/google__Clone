import React from 'react'
import Header from '../../component/header/header.component'
import {useNavigate,useLocation} from 'react-router-dom'
import { useResultContext } from '../../ResultProvider/ResultProvider' 
import SerpSearch from '../../component/serpApi'
import './news-page.styles.scss'
import { Loading } from '../../Loading';

function NewsPage() {

    const navigate=useNavigate()
    const [ { term }, dispatch ] = useResultContext();
    const location = useLocation().pathname;
    const { results, isLoading } = SerpSearch(term);
    
    if (isLoading) return <Loading />

    return (
        <div>
            <Header />
            <div className='news-page'>
                { results?.news_results.map(item => (
                    <div className='card' key={ item.position }>
                        <div className='text'>
                            <p className='source'> { item.source }</p>
                            <a href={item.link} className='title'> { item.title }</a>
                            <p className='info'>{ item.snippet }</p>
                            <p className='time'>{ item.date }</p>
                        </div>
                        <div>
                            <img className='image' key={ item.position } src={ item.thumbnail} />
                        </div>
                        
                    </div>
                ))}
            </div> 
            
        </div>
    )
}

export default NewsPage
