import React,{useState} from 'react'
import './search-box.styles.scss'
import { ReactComponent as SearchIcon } from '../../assets/search-icon/search-icon.svg'
import { ReactComponent as VoiceIcon } from '../../assets/voice-search-icon/voice-search-icon.svg';
import {useNavigate} from 'react-router-dom'

import { useResultContext } from '../../ResultProvider/ResultProvider'
import {actionTypes} from '../../ResultProvider/reducer'

const SearchBox = ({ placeholder, handleChange }) => {
    const [ input, setInput ] = useState("")
    const [ {},dispatch ] = useResultContext();
    const navigate = useNavigate();
    
    const search = e => {
        e.preventDefault();

        console.log('You are hitting the search button');
        
        navigate(`/search`)

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term:input
        })
    }
    return (
        <form className='search-box'>
            <SearchIcon type='submit' onClick={search}  className='search-icon' />
            <input
                placeholder={ placeholder }
                value={input}
                onChange={e=>setInput(e.target.value) }
                type='text' 
            />
            {
                input && (
                    <button
                        type="button"
                        onClick={ e => setInput('') }>
                        X
                    </button>

                    // Render Recent Searches
                )
            }
            <VoiceIcon className='voice-icon' onClick={()=> navigate('/voice-search')} />
        </form>
    )
}

export default SearchBox