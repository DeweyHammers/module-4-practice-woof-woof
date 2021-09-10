import React from "react";

const DogBar = ({ pups, handleShowDog, filter, handleFilter }) => {
  const renderDogBar = () => {
    if (filter === "ON") {
      pups = pups.filter((pup) => pup.isGoodDog === true);
    }
    return pups.map((pup) => (
      <span key={pup.id} onClick={() => handleShowDog(pup.id)}>
        {pup.name}
      </span>
    ));
  };

  return (
    <div>
      {" "}
      <div id="filter-div">
        <button onClick={handleFilter} id="good-dog-filter">
          Filter good dogs: {filter}
        </button>
      </div>
      <div id="dog-bar">{renderDogBar()}</div>
    </div>
  );
};

export default DogBar;
