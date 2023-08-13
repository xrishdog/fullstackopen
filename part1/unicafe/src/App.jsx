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

const Statistics = (props) => {

  const total = props.good + props.neutral + props.bad
  const score = (props.good * 1 + props.neutral * 0 + props.bad * -1)
  const avg = score/total
  const percentPositive = props.good/total * 100 + '%'
      
  return(
    <div>
      <Result text = 'good' val = {props.good}/>
      <Result text = 'neutral' val = {props.neutral}/>
      <Result text = 'bad' val = {props.bad}/>
      <Result text = 'total' val = {total}/>
      <Result text = 'average' val = {avg}/>
      <Result text = 'percent positive' val = {percentPositive}/>
    </div>
  )
}
const Result = (props) => {
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
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const goodUpdated = good +1
    setGood(goodUpdated)
    setTotal(goodUpdated+bad+neutral)
  }
  const handleBadClick = () => {
    const badUpdated = bad +1
    setBad(badUpdated)
    setTotal(good + badUpdated + neutral)
  }
  const handleNeutralClick = () => {
    const neutralUpdated = neutral +1
    setNeutral(neutralUpdated)
    setTotal(good + bad + neutralUpdated)
  }
  const computeAverage = () => {
    const score = (good * 1 + neutral * 0 + bad * -1)
    return (score/total)
  }

  const computePercentPositive = () =>{
    return (good/total * 100 + "%")
  }
  return (
    
    <div>
      <Header text = 'Give feedback'/>
      <Button handleClick = {handleGoodClick} text = 'good'/>
      <Button handleClick = {handleNeutralClick} text = 'neutral'/>
      <Button handleClick = {handleBadClick} text = 'bad'/>

      <Header text = 'Results'/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App