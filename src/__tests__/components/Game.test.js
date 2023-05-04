import React from "react";
import renderer from "react-test-renderer";
import Game from "../../components/Game";

test("Game component renders correctly", () => {
  const component = renderer.create(
    <Game homeTeam="Spain" awayTeam="Brazil" homeScore={0} awayScore={0} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
