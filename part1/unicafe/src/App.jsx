import { useState } from 'react'

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

  const average = all === 0 ? 0 : (1 * good + 0 * neutral + -1 * bad)/all

  const positive = all === 0 ? 0 : (good / all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <p>
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br/>
        all {all} <br/>
        average {average} <br/>
        positive {positive} %
      </p>
    </div>
  )
}

export default App