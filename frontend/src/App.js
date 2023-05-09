import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';




function App() {
  let [details, setDetails] = useState([]);
  let [wait, setWait] = useState(false);
  let data;

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(res => {
        setDetails(res.data)
      }).then(setWait(true))
      .catch(err => { })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          AXSOS Academy
        </p>

        <hr></hr>
        <ul>
          {details.map((output, id) => (
            <li key={id}>
              <h4>{output.employee}  </h4>
              <h6>({output.department})</h6>

            </li>
          ))}
        </ul>


      </header>
    </div>
  );
}

export default App;
