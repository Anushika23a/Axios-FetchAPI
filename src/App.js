import "./App.css";

import axios from 'axios'
import { useEffect, useState } from "react";
function App() {
 const [fact, setFact] = useState("");

 const handleClick = () => {
  fetchFact()
 }
 const fetchFact = () => {
  axios.get("https://catfact.ninja/fact").then((response) => {
  setFact(response.data.fact)
  });
 }
useEffect(() => {
 fetchFact()
}, []);
return (
 <div className="App">
 <h2>Press the button for a random cat fact!</h2>
 <hr />
 <button onClick= {() => handleClick()}>Get Cat fact</button>
 <p>{fact}</p>
 </div>
);
}
export default App;