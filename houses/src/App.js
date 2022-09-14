import Houses from "./Houses";

function App() {

  return (
    <div className="App">
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
      </div>
      <div className="w3-row-padding">
        <Houses/>
      </div>
    </div>
  );
}

export default App;
