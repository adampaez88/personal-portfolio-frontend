import React from 'react'
import './Header.css'

export default function Header(){
    return (
        <div className='header-container'>
            <div className='name-and-degree'>
                <h1>Adam Chernitsky</h1>
                <h3>Full Stack Software Engineer</h3>
            </div>
            <div className='contact-info'>
                <h1>(720)-323-7206</h1>
                <h3>adamlee2388@gmail.com</h3>
                {/* <a href='https://adamlee2388@gmail.com' 
                target='_blank' className='footer-items'>adamlee2388@gmail.com</a> */}
            </div>
        </div>
    )
}