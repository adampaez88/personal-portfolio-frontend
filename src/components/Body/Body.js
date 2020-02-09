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
                            <li>Football</li>
                            <li>Gaming</li>
                            <li>Being creative</li>
                            <li>Being outdoors</li>
                            <li>Hiking</li>
                            <li>Camping</li>
                            <li>Time with family</li>
                        </ul>
                    </div>
                </div>

                <div className='projects'>
                    <div className='projects-div'>
                        <h1>Experience</h1>
                        <ul>
                            <li>Flatiron School: Software Engineering</li>
                            <li>Denver Beverage: Soda Technician</li>
                            <li>Fedex Ground: Package Handler</li>
                        </ul>
                    </div>
                    <div className='projects-div'>
                        <h1>My Projects</h1>
                        <ul>
                            <li><a href='https://github.com/adampaez88/Social-media' 
                            target='_blank'>Alumni Social</a></li>
                            <li><a href='https://github.com/adampaez88/React-Dog-App' 
                            target='_blank'>React Dog App</a></li>
                            <li><a href='https://github.com/adampaez88/Dog-app' 
                            target='_blank'>JS Dog App</a></li>
                        </ul>
                    </div>

                    <div className='contact-div'>
                        <h1>Contact Me</h1>
                        <h3>Number: 720-323-7206</h3>
                        <a href='https://www.linkedin.com/in/adam-chernitsky-157895144/'
                        target='_blank' className='Linkedin-link' >Linkedin</a>
                        <h3>Email: adamlee2388@gmail.com</h3>
                        <h3>Alternate Email: adam987@comcast.net</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;