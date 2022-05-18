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

  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }
  return (

    <div>
      <Header course={course} />
      <Contents part1={part1.name} exercises1={part1.exercises} part2={part2.name} 
      exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises} />
      <Total number={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
