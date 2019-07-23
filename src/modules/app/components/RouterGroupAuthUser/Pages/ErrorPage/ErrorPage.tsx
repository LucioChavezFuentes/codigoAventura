import React from 'react';
import HeaderUser from '../utilsComponents/HeaderUser/HeaderUser'

const ErrorPage = () => {
    
    return (
        <div className='page' >
            <HeaderUser />
            <p>Error Chavo: Path does not exist!</p>
        </div>
    )
}

export default ErrorPage;