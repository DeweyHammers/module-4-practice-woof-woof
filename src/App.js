import React, { Component } from "react";
import DogBar from "./components/DogBar";
import Dog from "./components/Dog";
import "./App.css";

class App extends Component {
  state = {
    pups: [],
    showPup: false,
    filter: "OFF",
  };

  componentDidMount() {
    fetch("http://localhost:3000/pups")
      .then((resp) => resp.json())
      .then((json) => this.setState({ pups: json }));
  }

  handleShowDog = (id) => {
    this.setState({
      showPup: this.state.pups.filter((pup) => pup.id === id)[0],
    });
  };

  handleFilter = () => {
    this.state.filter === "OFF"
      ? this.setState({ filter: "ON" })
      : this.setState({ filter: "OFF" });
  };

  handleUpdateDog = (id, value) => {
    const boolen = value === "Good Dog!" ? false : true;
    const newState = this.state.pups.map((pup) => {
      if (pup.id === id) {
        pup.isGoodDog = boolen;
        return pup;
      } else {
        return pup;
      }
    });
    this.setState({ pups: newState });
    fetch(`http://localhost:3000/pups/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isGoodDog: boolen }),
    });
  };

  render() {
    return (
      <div className="App">
        <DogBar
          filter={this.state.filter}
          pups={this.state.pups}
          handleShowDog={this.handleShowDog}
          handleFilter={this.handleFilter}
        />
        {this.state.showPup && (
          <Dog
            handleUpdateDog={this.handleUpdateDog}
            pup={this.state.showPup}
          />
        )}
      </div>
    );
  }
}

export default App;
