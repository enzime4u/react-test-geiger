import { configureStore } from "@reduxjs/toolkit";
import formSlice, {
  updateEmail,
  updateCategory,
  updateTerms,
  submitForm,
} from "./formSlice";

describe("formSlice", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({ reducer: formSlice });
  });

  it("should handle initial state", () => {
    const { email, category, agreedToTerms, isValid } = store.getState();
    expect(email).toEqual("");
    expect(category).toBeNull();
    expect(agreedToTerms).toEqual(false);
    expect(isValid).toEqual(false);
  });

  it("should handle updateEmail", () => {
    store.dispatch(updateEmail("test@test.com"));
    expect(store.getState().email).toEqual("test@test.com");
  });

  it("should handle updateCategory", () => {
    store.dispatch(updateCategory("Shoes"));
    expect(store.getState().category).toEqual("Shoes");
  });

  it("should handle submitForm", () => {
    store.dispatch(updateEmail("test@test.com"));
    store.dispatch(updateTerms(true));
    store.dispatch(submitForm());
    expect(store.getState().isValid).toEqual(true);
  });
});
