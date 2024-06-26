import { useState } from "react";

// a proper place to define a component
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = ({ text, value }) => (
    <p>{text} {value}</p>
)
const Statistics = (props) => {

    const { good, neutral, bad } = props
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100

    if (all === 0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>statistics</h1>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive} />
            </div>
        )
    }
}

  
  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
 
  
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text="good" />
            <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button handleClick={() => setBad(bad + 1)} text="bad" />

           
       
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
  }

export default App