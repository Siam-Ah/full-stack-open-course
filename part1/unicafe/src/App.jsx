import { useState } from 'react'

const Statistics = (props) => {
  const average = props.all === 0 ? 0 : (1 * props.good + 0 * props.neutral + -1 * props.bad)/props.all
  const positive = props.all === 0 ? 0 : (props.good / props.all) * 100
  
  return (
    <div>
      <h1>statistics</h1>
      {
        props.all === 0 ? "No feedback given" : 
          <p>
            good {props.good} <br/>
            neutral {props.neutral} <br/>
            bad {props.bad} <br/>
            all {props.all} <br/>
            average {average} <br/>
            positive {positive} %
          </p>
      }
    </div>
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  function handleGood() {
    setGood(prevGood => prevGood + 1)
    setAll(prevAll => prevAll + 1)
  }

  function handleNeutral() {
    setNeutral(prevNeutral => prevNeutral + 1)
    setAll(prevAll => prevAll + 1)
  }

  function handleBad() {
    setBad(prevBad => prevBad + 1)
    setAll(prevAll => prevAll + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App