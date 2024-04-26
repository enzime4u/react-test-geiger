import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/configs";
import Form from ".";

const withProviders = (children: React.JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

it("it should match the snapshot and render", async () => {
  const { container } = render(withProviders(<Form />));

  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();

  const emailInput = await screen.findByPlaceholderText("Add your email");
  const selectInput = await screen.findByPlaceholderText("Choose");
  const checkboxInput = screen.getByRole("checkbox");

  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(selectInput, { target: { value: "Shoes" } });
  fireEvent.click(checkboxInput!);

  expect(emailInput).toHaveValue("test@test.com");
  expect(selectInput).toHaveValue("Shoes");
  expect(checkboxInput).toBeChecked();
});
