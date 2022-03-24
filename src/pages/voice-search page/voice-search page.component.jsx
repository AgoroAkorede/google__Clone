import React from 'react';
import { ReactComponent as VoiceIcon } from '../../assets/voice-search-icon/voice-search-icon.svg'
import './voice-search page.styles.scss'

const VoiceSearchPage = () => {
    return (
        <div className='voice-search-page'>
            <div className='voice-searh-text'>
                <p className='title'>Voice search has been turned off.</p>
                <span className='footer'> Details</span>
            </div>
            <div className='voice-icon-container'>
             <VoiceIcon className='voice-icon' />
            </div>
        </div>
    )
}

export default VoiceSearchPage