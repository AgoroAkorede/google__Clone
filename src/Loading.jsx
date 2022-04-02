import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import './Loading.scss'

export const Loading = () => {
    return (
        <div className='loader'>
            <TailSpin color="#0c0cf5" height={ 100 } width={ 80 } />
        </div>
    );
}
    