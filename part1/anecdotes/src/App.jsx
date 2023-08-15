import { useState } from 'react'


const Header = ({text}) => {
  return(
    <h1>{text}</h1>
  )
}

const Anecdote = ({text}) => {
  return(
    <div>{text}</div>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [allPoints, setAll] = useState(Array(anecdotes.length).fill(0))

  //copy of votes
  const copy = [...allPoints]
  

  const chooseRandom = () => {
    const newSelected = Math.floor(Math.random() * anecdotes.length)
    setSelected(newSelected)
  }

  const updateVote = () => {
    copy[selected] +=1
    setAll(copy)
    // chooseRandom()
    console.log(copy)
  }

  const findGreatest = () =>{
    const mostVotes = copy.indexOf(Math.max(...copy))
    return(mostVotes)
  }

  return (
    <div>
      <Header text = 'Anecdote of the day'/>
      <Anecdote text = {anecdotes[selected]}/>
      <button onClick = {updateVote}>Vote</button>
      <button onClick = {chooseRandom}>Next anecdote</button>

      <Header text = 'Anecdote with most votes'/>
      <Anecdote text = {anecdotes[findGreatest()]} />
    </div>
  )
}

export default App