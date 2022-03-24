import React from 'react';
import SearchBox from '../../component/search-box/search-box.component';
import { useResultContext } from '../../ResultProvider/ResultProvider' 
import GoogleSearch  from '../../component/google-search/google-search.component';

const SearchPage = () => {
    const [ { term }, dispatch ] = useResultContext();
    const { results } = GoogleSearch(term)
    console.log(results);
    
    return (
        <div>
            <h1>Google</h1>
            <SearchBox value={ term } />
            {
                results?.items.map(item => (
                    <div>
                        <a href={ item.link }>
                        {item.displayLink}
                        </a>
                        <a href={item.link}>
                            <h2>{item.title}</h2>
                        </a>
                        <p>{ item.htmlSnippet }</p>
                        
                    </div>
                ))
            }
        </div>
    )
};

export default SearchPage