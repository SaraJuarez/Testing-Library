import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial stats", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const check = screen.getByRole("checkbox", {
    name: "I agree on terms and conditions",
  });

  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  expect(check).not.toBeChecked();
});

test("Flow", async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();
  const button = screen.getByRole("button", { name: "Confirm order" });
  const check = screen.getByRole("checkbox", {
    name: "I agree on terms and conditions",
  });

  await user.click(check);
  expect(check).toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle("backgroundColor: orange");

  await user.click(check);
  expect(check).not.toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle("backgroundColor: gray");
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  //popover starst out hidden
  const nullPopover = screen.queryByText(/No ice cream will be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();
  //popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.queryAllByText(
    /I agree on terms and conditions/i
  )[0];
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();
  //popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  const otherNullPopover = screen.queryByText(
    /No ice cream will be delivered/i
  );
  expect(otherNullPopover).not.toBeInTheDocument();
});
