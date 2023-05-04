import React from "react";
import "../Game.css";

const Game = ({ id, homeTeam, awayTeam, homeScore, awayScore }) => {
  return (
    <div data-testid={id} className="game-container">
      <h2 className="game-header">{`${homeTeam} vs. ${awayTeam} `}</h2>
      <p className="game-scores">{`${homeScore} - ${awayScore}`}</p>
    </div>
  );
};

export default Game;
