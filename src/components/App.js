import React, { useState, useEffect } from "react"
import Header from "./Header"
import ToyForm from "./ToyForm"
import ToyContainer from "./ToyContainer"

const URL = "http://localhost:3001/toys"

function App() {
  const [showForm, setShowForm] = useState(false)
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(toys => setToys(toys))
  }, [])

  function handleClick() {
    setShowForm(showForm => !showForm)
  }

  function handleAddToy(addedToy) {
    setToys([...toys, addedToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} />
    </>
  )
}

export default App
