import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./app";

test("renders the app", async () => {
  const user = userEvent.setup();
  render(<App />);

  const button = screen.getByRole("button");

  expect(button).toHaveTextContent(/count is 0/i);

  await user.click(button);

  expect(button).toHaveTextContent(/count is 1/i);
});
