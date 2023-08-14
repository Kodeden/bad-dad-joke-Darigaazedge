import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it("adds jokes to the correct list", async () => {
  const user = userEvent.setup();

  render(<App />);

  const getJokeBtn = screen.getByRole("button", { name: /get joke/i });

  await user.click(getJokeBtn);

  // These buttons are rendered after the first joke is fetched
  let goodJokeBtn = await screen.findByRole("button", { name: "👍🏾" });
  let badJokeBtn = await screen.findByRole("button", { name: "👎🏾" });

  // First is 👍🏾, second is 👎🏾
  const jokeLists = screen.getAllByRole("list");

  // Add 3 goods and 2 bads
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);

  // Keep awaiting these buttons to come back after we click the get joke button
  goodJokeBtn = await screen.findByRole("button", { name: "👍🏾" });
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);
  goodJokeBtn = await screen.findByRole("button", { name: "👍🏾" });
  await user.click(goodJokeBtn);

  await user.click(getJokeBtn);
  badJokeBtn = await screen.findByRole("button", { name: "👎🏾" });
  await user.click(badJokeBtn);

  await user.click(getJokeBtn);
  badJokeBtn = await screen.findByRole("button", { name: "👎🏾" });
  await user.click(badJokeBtn);

  const goodJokeItems = within(jokeLists[0]).getAllByRole("listitem");
  const badJokeItems = within(jokeLists[1]).getAllByRole("listitem");

  expect(goodJokeItems).toHaveLength(3);
  expect(badJokeItems).toHaveLength(2);
});
