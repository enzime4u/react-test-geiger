import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "@/configs";
import Form from ".";
import { MockedProvider } from "@apollo/client/testing";
import { GET_FILMS } from "@/queries";

const mocks = [
  {
    request: {
      query: GET_FILMS,
    },
    result: {
      data: {
        allFilms: {
          films: [
            { title: "Title One" },
            { title: "Title Two" },
            { title: "Title Three" },
            { title: "Title Four" },
          ],
        },
      },
    },
  },
];

const withProviders = (children: React.JSX.Element) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>{children}</Provider>
  </ThemeProvider>
);

it("it should match the snapshot and render", async () => {
  const { container } = render(
    withProviders(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Form />
      </MockedProvider>
    )
  );

  expect(container).toMatchSnapshot();
  expect(container).toBeInTheDocument();

  const emailInput = await screen.findByPlaceholderText("Add your email");
  const selectInput = await screen.findByLabelText("Please select a category");

  const checkboxInput = screen.getByRole("checkbox");

  fireEvent.change(emailInput, { target: { value: "test@test.com" } });
  fireEvent.change(selectInput, { target: { value: "Title One" } });
  fireEvent.click(checkboxInput!);

  expect(emailInput).toHaveValue("test@test.com");
  expect(selectInput).toHaveValue("Title One");
  expect(checkboxInput).toBeChecked();
});
