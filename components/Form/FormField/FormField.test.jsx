import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/redux/store";
import FormFieldStructure from "@/components/Form/FormField/FormFieldStructure";
import "@testing-library/jest-dom";

describe("FormFieldStructure", () => {
  it("renders the correct input type based on props", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FormFieldStructure type="email" label="Email" name="email" />
      </Provider>
    );

    const input = getByLabelText("Email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("updates the store when the input value changes", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <FormFieldStructure type="email" label="Email" name="email" />
      </Provider>
    );

    const input = getByLabelText("Email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(store.getState().newsLetter.email).toBe("test@example.com");
  });
});
