import React from "react"

const URL = "http://localhost:3001/toys"

function ToyCard({ toy, onDeleteToy, onLikeClick }) {
  function handleLikeClick() {
    const updatedLike = {
      likes: (toy.likes += 1),
    }

    fetch(URL + `/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedLike),
    })
      .then(res => res.json())
      .then(updatedToy => onLikeClick(updatedToy))
  }

  function handleDeleteClick() {
    fetch(URL + `/${toy.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => onDeleteToy(toy))
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  )
}

export default ToyCard
