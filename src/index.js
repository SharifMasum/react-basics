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
    <p>{props.total} {props.number}</p>
  </div>
  )
}

const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12
  const number = 30
  const total = 'Total'
  return (

    <div>
      <Header course={course} />
      <Contents part1={part1} exercises1={exercises1} part2={part2} 
      exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={total} number={number} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
