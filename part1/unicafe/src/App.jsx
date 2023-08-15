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

  if (total === 0){
    return (
      <div>No feedback given</div>
    )
  }
      
  return(
    <table>
      <tbody>
        <StatisticLine text = 'good' val = {props.good}/>
        <StatisticLine text = 'neutral' val = {props.neutral}/>
        <StatisticLine text = 'bad' val = {props.bad}/>
        <StatisticLine text = 'total' val = {total}/>
        <StatisticLine text = 'average' val = {avg}/>
        <StatisticLine text = 'percent positive' val = {percentPositive}/>
      </tbody>
    </table>
  )
}
const StatisticLine = (props) => {
  console.log(props)
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.val}</td>
    </tr>
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