import React from 'react'
import Typed from 'react-typed';
const Header = () => {
    return (
        <div className='header-wraper'>
            <div className="maininfo">
                <h1> web development and websites promotions</h1>
                <Typed
                    strings={['Node Js Developer','react js developer','MERN Stack Web Developer']}
                    typeSpeed={40}
                />
            </div>
        </div>
    )
}

export default Header
