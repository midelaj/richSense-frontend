import { useState } from 'react';

const App = () => {
  const [teams, setTeams] = useState([]);
  const [inputType, setInputType] = useState("");

  const addTeam = () => {
    if (inputType.trim() !== "") {
      setTeams([...teams, inputType.trim()]);
      setInputType("");
    }
  };

  const onChangeInput = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="App">
      <center>
        <h2>Team Management App</h2>
        <input
          type="text"
          placeholder="Enter team name"
          onChange={onChangeInput}
          value={inputType}
        />
        <button onClick={addTeam}>Add</button>
        <ol>
          {teams.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ol>
      </center>
    </div>
  );
};

export default App;