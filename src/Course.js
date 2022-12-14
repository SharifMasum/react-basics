import React from 'react'

const Header = ({heading}) => {
    return (
    <div>
      <h1>{heading}</h1>
    </div>
    )
  }
  
  const Part = ({name, exercise}) => {
    return (
      <div>
        <p>{name} {exercise}</p>
      </div>
    
    )
  }
  
  const Contents = (props) => {
    return (
    <div>
      <Part name={props.part1} exercise={props.exercises1} />
      <Part name={props.part2} exercise={props.exercises2} />
      <Part name={props.part3} exercise={props.exercises3} />
    </div>
    )
  }
  
  const Total = (props) => {
    return (
    <div>
      <p>Total {props.number}</p>
    </div>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>
      <Header heading={course.name} />
      <Contents 
        part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
        part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
        part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total number={course.parts[0].exercises + course.parts[1].exercises 
        + course.parts[2].exercises} />
    </div>
    )
  }

  export default Course