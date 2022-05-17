import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Contents = (props) => {
  return (
  <div>
    <p>{props.part1} {props.exercise1}</p>
    <p>{props.part2} {props.exercise2}</p>
    <p>{props.part3} {props.exercise3}</p>
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
  const total = 'Total'
  const number = 30
  return (

    <div>
      <Header course={course} />
      <Contents part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
      <Total total={total} number={number} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
