import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  const [team, updateTeam] = useState('');
  const [include, updateInclude] = useState(false);

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  const handleSelect = (event) => {
    updateTeam(event.target.value);
  }

  const handleInput = (event) => {
    updateInclude(event.target.checked);
  }

  const handleClick = () => {
    props.applyFilterCallback(team, include);
  }

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select id="teamSelect" className="form-select" value={team} onChange={handleSelect}>
          <option value=''>Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" checked={include} onChange={handleInput}/>
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={handleClick}>Apply Filter</button>
      </div>
    </div>
  );
}