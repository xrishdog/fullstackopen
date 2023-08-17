const Header = ({ course }) => <h2>{course}</h2>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Total= ({parts}) => {
  const sumArr = parts.map(part => part.exercises)
  const sum = sumArr.reduce((sum, exercises) => sum + exercises, 0)

  return(
    <p>total of {sum} exercises</p>
  )
}

const Content = ({ parts }) => {
  //console.log(parts.map(part => part.name))
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

export default Course