import "./App.css";
import * as React from "react";

function App(props) {
  const [state1, setstate1] = React.useState("Offline");
  const [state2, setstate2] = React.useState("Offline");
  const [state3, setstate3] = React.useState("Offline");

  const handleClick = (e) => {
    const id = e.target.value;

    if (id == 1) {
      if (state1 === "Offline") {
        setstate1("Online");
      } else {
        setstate1("Offline");
      }
    }
    if (id == 2) {
      if (state2 === "Offline") {
        setstate2("Online");
      } else {
        setstate2("Offline");
      }
    }
    if (id == 3) {
      if (state3 === "Offline") {
        setstate3("Online");
      } else {
        setstate3("Offline");
      }
    }
  };

  return props.coworkers.map((item, index) => {
    index += 1;
    return (
      <div className="App">
          <label>
            {item.first_name}
            {item.last_name}
            {index == 1
              ? state1 === "Offline" && index == 1
                ? "Online"
                : "Offline"
              : null}
            {index == 2
              ? state2 === "Offline" && index == 2
                ? "Online"
                : "Offline"
              : null}
            {index == 3
              ? state3 === "Offline" && index == 3
                ? "Online"
                : "Offline"
              : null}
          </label>
          <button value={index} onClick={(e) => handleClick(e)}>
            {index === 1 ? `${state1}` : null}
            {index === 2 ? `${state2}` : null}
            {index === 3 ? `${state3}` : null}
          </button>
          <br />
      </div>
    );
  });
}

App.defaultProps = {
  coworkers: [
    { first_name: "Max", last_name: "Mustermann" },
    { first_name: "Vladimir", last_name: "Leles" },
    { first_name: "Tobias", last_name: "Anhalt" },
  ],
};

export default App;
