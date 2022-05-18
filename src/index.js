import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
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

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Contents part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
      part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
      part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total number={course.parts[0].exercises + course.parts[1].exercises 
        + course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
