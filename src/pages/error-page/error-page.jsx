import React from 'react'
import './error-page.scss'

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <div className='text'>
                <h1 className='header'>Google</h1>
                <p className='content_1'> <span>404.</span> that's an error</p>
                <p className='content_2'>The requested Url was not found </p>
                <p className='content_2'>That's all we know</p>
            </div>
            
            <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIU2i7w6RJro5ufe-oyPKogXhN34sJKhEhg&usqp=CAU' />
        </div>
    )
}

export default ErrorPage
