import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MatchList from "../../components/MatchList";

describe("MatchList", () => {
  const matches = [
    {
      id: 0,
      homeTeam: "Spain",
      awayTeam: "Brazil",
      homeScore: 1,
      awayScore: 1,
    },
    {
      id: 1,
      homeTeam: "Argentina",
      awayTeam: "Germany",
      homeScore: 0,
      awayScore: 2,
    },
  ];

  test("renders Game components with correct props", () => {

    const { getByTestId } = render(<MatchList matches={matches} />);

    const game1 = getByTestId("0");
    expect(game1).toHaveClass("game-container");
    expect(game1).toHaveTextContent("Spain vs. Brazil");
    expect(game1).toHaveTextContent("1 - 1");

    const game2 = getByTestId("1");
    expect(game2).toHaveClass("game-container");
    expect(game2).toHaveTextContent("Argentina vs. Germany");
    expect(game2).toHaveTextContent("0 - 2");
  });

  it("renders the 'no matches' message when there are no matches", () => {
    const { getByText } = render(<MatchList matches={[]} />);

    const messageElement = getByText("No matches in progress.");
    expect(messageElement).toBeInTheDocument();
  });
});
