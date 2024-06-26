import { useState } from "react";

// a proper place to define a component
const Statistics = (props) => {
    const { good, neutral, bad } = props
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100
    return (
        <div>
            <h1>statistics</h1>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}%</p>
        </div>
    )
    
}
  
  
  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
 
  
    return (
        <div>
            <h1>give feedback</h1>
            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>
        
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
  }

export default App