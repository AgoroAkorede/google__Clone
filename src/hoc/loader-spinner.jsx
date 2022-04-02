import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => {
    return ( 
        <div className="loader-spinner">
            <Loader type="Puff" color="#00BFFF" height={550} width={80} />
        </div>
     );
}