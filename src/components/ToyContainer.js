import React from "react"
import ToyCard from "./ToyCard"

function ToyContainer({ toys, onDeleteToy, onLikeClick }) {
  const toyCards = toys.map(toy => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onDeleteToy={onDeleteToy}
      onLikeClick={onLikeClick}
    />
  ))
  return <div id="toy-collection">{toyCards}</div>
}

export default ToyContainer
