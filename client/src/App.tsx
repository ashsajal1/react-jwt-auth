import { useState, useEffect } from 'react'
import { Button } from '@radix-ui/themes';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/protected")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {data ? <p>get data from API <Button>Get data</Button></p> : <p>no data available!</p>}
    </>
  )
}

export default App;