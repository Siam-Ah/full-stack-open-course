const App = () => {
  const course = 'Half Stack application development'
  const courseInfo = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content courseInfo={courseInfo} />
      <Total courseInfo={courseInfo} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.courseInfo[0].part } exercises={props.courseInfo[0].exercises} />
      <Part part={props.courseInfo[1].part } exercises={props.courseInfo[1].exercises} />
      <Part part={props.courseInfo[2].part } exercises={props.courseInfo[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.courseInfo[0].exercises + props.courseInfo[1].exercises + props.courseInfo[2].exercises}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

export default App
