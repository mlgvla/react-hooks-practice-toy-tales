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

  function handleDeleteToy(deletedToy) {
    console.log(deletedToy.id)
    const filteredToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(filteredToys)
  }

  function handleLikeClick(updatedToy) {
    const updatedToys = toys.map(toy =>
      toy.id === updatedToy.id ? updatedToy : toy
    )
    setToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeClick={handleLikeClick}
      />
    </>
  )
}

export default App
