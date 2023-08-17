const Header = ({ course }) => <h1>{course}</h1>



const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total= ({parts}) => {
  const sumArr = parts.map(part => part.exercises)
  const sum = sumArr.reduce((sum, exercises) => sum + exercises, 0)

  console.log(sumArr)
  console.log(sum)
  return(
    <p>total of {sum} exercises</p>
  )
}

const Content = ({ parts }) => {
  console.log(parts.map(part => part.name))
  return(
    <>
      {parts.map(part => <Part key = {part.id} part = {part}/>)}
    </>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App