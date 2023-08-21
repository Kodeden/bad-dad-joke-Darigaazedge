import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import fetch from "node-fetch";
import App from "./App";

it("adds jokes to the correct list", async () => {
  const user = userEvent.setup();
  global.fetch = fetch;

  render(<App />);

  const getJokeBtn = screen.getByTestId("getDadJoke");
  const goodJokeBtn = screen.getByTestId("voteUpBtn");
  const badJokeBtn = screen.getByTestId("voteDownBtn");

  // First is 👍🏾, second is 👎🏾
  const jokeLists = screen.getAllByRole("list");

  // 3 good and 2 bad jokes
  await user.click(getJokeBtn);
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);
  await user.click(badJokeBtn);

  await user.click(getJokeBtn);
  await user.click(badJokeBtn);

  const goodJokeItems = within(jokeLists[0]).getAllByRole("listitem");
  const badJokeItems = within(jokeLists[1]).getAllByRole("listitem");

  expect(goodJokeItems).toHaveLength(3);
  expect(badJokeItems).toHaveLength(2);
});
