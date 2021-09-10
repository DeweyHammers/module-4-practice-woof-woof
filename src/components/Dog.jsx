import React from "react";

const Dog = ({ pup, handleUpdateDog }) => {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <img src={pup.image} alt={pup.name} />
        <h2>{pup.name}</h2>
        <button
          onClick={(event) => handleUpdateDog(pup.id, event.target.innerText)}
        >
          {pup.isGoodDog ? "Good Dog!" : "Bad Dog!"}
        </button>
      </div>
    </div>
  );
};

export default Dog;
