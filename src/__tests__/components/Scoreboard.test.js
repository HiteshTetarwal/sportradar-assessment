import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scoreboard from "../../components/Scoreboard";
import MatchList from "../../components/MatchList";

describe("Scoreboard component", () => {
  test("renders summary and add game containers", () => {
    const { getByText, getByLabelText } = render(<Scoreboard />);
    expect(getByText("Summary")).toBeInTheDocument();
    expect(getByText("Add New Game")).toBeInTheDocument();
    expect(getByLabelText("Home Team:")).toBeInTheDocument();
    expect(getByLabelText("Away Team:")).toBeInTheDocument();
    expect(getByText("Add Game")).toBeInTheDocument();
  });

  test("checks the available matches on scoreboard", () => {
    const matches = [
      { homeTeam: "Brazil", awayTeam: "Argentina", homeScore: 0, awayScore: 5 }
    ];
    const { getByText } = render(<Scoreboard />);
    render(<MatchList matches={matches} />)
    expect(getByText("Brazil vs. Argentina")).toBeInTheDocument();
  });

  test("removes a match", () => {
    const { getByText, getByTestId, queryByText } = render(<Scoreboard />);
    const mexicoCanadaMatch = getByText(/Mexico vs. Canada/i);
    expect(mexicoCanadaMatch).toBeInTheDocument();
    const removeButton = getByTestId("Mexico");
    fireEvent.click(removeButton);
    expect(queryByText(/Mexico vs. Canada/i)).not.toBeInTheDocument();
  });
});