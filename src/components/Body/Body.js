import React from 'react'
import './Body.css'


function Body(){
    return (
        <>
            <div className='main-body-div'>
                <div className='sills-interests'>
                    <div className='each-div'>
                        <h1>Skills</h1>
                        <ul className='skills-list'>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node</li>
                            <li>Active Record</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className='pic-div'>
                        <img src={require('./DSC_3634.jpg')} />
                    </div>
                    <div className='each-div'>
                        <h1>Interests</h1>
                        <ul>
                            <li>Basketball</li>
                            <li>Gaming</li>
                            <li>Being creative</li>
                        </ul>
                    </div>
                </div>

                <div className='projects'>
                    <div className='each-div'>
                        <h1>Experience</h1>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className='each-div'>
                        <h1>My Projects</h1>
                    </div>

                    <div className='each-div'>
                        <h1>Contact Me</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;