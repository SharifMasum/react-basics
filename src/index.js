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
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12
  return (
  <div>
    <Part name={part1} exercise={exercises1} />
    <Part name={part2} exercise={exercises2} />
    <Part name={part3} exercise={exercises3} />
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
  const number = 30
  const total = 'Total'
  return (

    <div>
      <Header course={course} />
      <Contents />
      <Total total={total} number={number} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
