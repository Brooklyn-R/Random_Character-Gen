import React from "react";

class StarWars extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      masters: null,
      films: [],
    };
  }

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88);
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          masters: data.masters,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        });
      });
  }

  render() {
    return (
      <div>
        <div
          className="starwars"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontWeight: "500",
            color: "whitesmoke",
            fontSize: "16px",
            textAlign: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          {this.state.loadedCharacter && (
            <div>
              <h1 style={{ color: "fuchsia" }}>{this.state.name}</h1>
              <p>
                <img
                  src={this.state.imageUrl}
                  alt={this.state.name}
                  className="img"
                  style={{
                    width: "500px",
                    height: "400px",
                    borderRadius: "12px",
                  }}
                />
              </p>
              <p>Height: {this.state.height} m</p>
              <p>Homeworld: {this.state.homeworld}</p>
              <ul>{this.state.masters}</ul>
            </div>
          )}
          <button
            type="button"
            onClick={() => this.getNewCharacter()}
            className="btn"
            style={{
              height: "40px",
              width: "200px",
              fontSize: "16px",
              color: "ivory",
              backgroundColor: "fuchsia",
              outline: "0",
              borderRadius: "5px",
              border: "none",
            }}
          >
            Randomize Character
          </button>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: `url(${this.state.imageUrl})` }}
        ></div>
      </div>
    );
  }
}

export default StarWars;
