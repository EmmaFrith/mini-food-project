import './App.css';
import Dog from './components/dog';
import React from 'react'

const App = () => {

  const [dogs, setDogs] = React.useState([])


  React.useEffect(() => {
    async function fetchDogs() {
      const resp = await fetch('https://dog.ceo/api/breed/cockapoo/images')
      const data = await resp.json()
      setDogs(data.message)
    }

    fetchDogs()

  }, [])
  
  return (
    <>
      <h1>Cockapoo instax</h1>
      <Dog dogData={dogs} />
    </>
  );
  
};

export default App;