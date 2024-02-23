import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your work goes here

  const [sortByCriteria, updateSorting] = useState(null);
  const [isAscending, updateOrder] = useState(null);

  const handleClick = (event) => {
    if (sortByCriteria !== event.currentTarget.name) {
      updateSorting(event.currentTarget.name);
      updateOrder(true);
    } else {
      if (isAscending) {
        updateOrder(false);
      } else {
        updateSorting(null);
        updateOrder(null);
      }
    }
  }

  var sortedArr = _.sortBy(props.data, sortByCriteria);
   if (!isAscending && isAscending !== null) {
     sortedArr = _.reverse(sortedArr);
   }

  //convert data into rows
  const rows = sortedArr.map((match) => {
    return <GameDataRow key={match.year} game={match} />
  });

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" onClick={handleClick} active={sortByCriteria === 'year'} ascending={isAscending && sortByCriteria === 'year'}/>
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" onClick={handleClick} active={sortByCriteria === 'winner'} ascending={isAscending && sortByCriteria === 'winner'}/>
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" onClick={handleClick} active={sortByCriteria === 'score'} ascending={isAscending && sortByCriteria === 'score'}/>
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" onClick={handleClick} active={sortByCriteria === 'runner_up'} ascending={isAscending && sortByCriteria === 'runner_up'}/>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props:
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ game }) { //game = props.game
  return (
    <tr>
      <td>{game.year}</td>
      <td className="text-end">{game.winner} {game.winner_flag}</td>
      <td className="text-center">{game.score}</td>
      <td>{game.runner_up_flag}&nbsp;&nbsp;{game.runner_up}</td>
    </tr>
  );
}