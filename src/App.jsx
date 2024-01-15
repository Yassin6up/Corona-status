import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
function App() {
  const [corona, setCorona] = useState([])
  useEffect(() => {
    axios.get("https://disease.sh/v3/covid-19/countries").then((result) => {
      let results = result.data
      setCorona(results)
    })
  }, [])

  return (
    <>
    <h1>Corona status </h1>
      {corona.map((ele) => {
        return (
          <div>
            <img src={ele.countryInfo.flag} />
            <h1> {ele.country} </h1>
            <p>Cases : {ele.cases} </p>
            <p>Recovered : {ele.recovered} </p>
            <p>Deaths : {ele.deaths}</p>
          </div>
        )
      })}
    </>
  )
}
export default App
