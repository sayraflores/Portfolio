import React from 'react'
import "../styles/Home.css"
import Sayra from '../images/sayra.png'


export const Home = () => {
  return (
    
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sayra</h2>
        <div className="prompt">
          <p>I am a Full Stack Web Developer who loves all things tech.</p>
        </div>
        <img className='sayra' src= {Sayra} alt =""/>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
            HTML, CSS , Bootstrap, ReactJS,NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
            NodeJS, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, ReactJS</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;