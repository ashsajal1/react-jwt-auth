import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000")
      .then((res) => res.json())
      .then((res) => setCount(res.ok))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {count ? <p>get data from API</p> : <p>no data available!</p>}
    </>
  )
}

export default App;