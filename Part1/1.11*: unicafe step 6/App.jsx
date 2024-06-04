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
               <table>
                     <tbody>
                          <tr>
                            <td>good</td>
                            <td>{good}</td>
                          </tr>
                          <tr>
                            <td>neutral</td>
                            <td>{neutral}</td>
                          </tr>
                          <tr>
                            <td>bad</td>
                            <td>{bad}</td>
                          </tr>
                          <tr>
                            <td>all</td>
                            <td>{all}</td>
                          </tr>
                          <tr>
                            <td>average</td>
                            <td>{average}</td>
                          </tr>
                          <tr>
                            <td>positive</td>
                            <td>{positive}</td>
                          </tr>
                     </tbody>
                </table>

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