import { useState } from 'react'


const Button = (props) => {
  //console.log(props.text)
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const Header = (props) => {
  //console.log(props.text)
  return(
    <h1>{props.text}</h1>
  )
}

const Result = (props) => {
  console.log('new button click')
  console.log(props)
  return(
    <div>{props.text} {props.val}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good+1)
  }
  const handleBadClick = () => {
    setBad(bad+1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral+1)
  }

  return (
    
    <div>
      <Header text = 'Give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>

      <Header text = 'Results'/>
      <Result text = 'good' val = {good}/>
      <Result text = 'neutral' val = {neutral}/>
      <Result text = 'bad' val = {bad}/>
    </div>
  )
}

export default App