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
                    <div className='each-div'>
                        <h1>Experience</h1>

                    </div>
                    <div className='each-div'>
                        <h1>Interests</h1>

                    </div>
                </div>
                <div className='projects'>
                    <h1>Projects</h1>
                </div>
            </div>
        </>
    )
}

export default Body;