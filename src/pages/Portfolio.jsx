import React from 'react'
import Personalprojects from '../components/Personalprojects'
import "../styles/Portfolio.css"
import {ProjectList} from '../helpers/ProjectList'

import "../styles/Projects.css"
const Portfolio = () => {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'></div>
    {ProjectList.map((project) => {
      return <Personalprojects name ={project.name} image={project.image}/>
    })}
    </div>
  )
}

export default Portfolio