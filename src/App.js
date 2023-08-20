import "./App.css";
import DataList from "./DataList";
import { useState } from "react";
import { List } from "./List";

function App() {
  const [people, setPeople] = useState(DataList);
  // console.log(people);
  return (
    <div className="App">
      <div className="Listdata">
        <h1>Today Birthday({people.length})</h1>
        <List data={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
