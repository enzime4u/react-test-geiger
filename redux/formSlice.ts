import { createSlice } from "@reduxjs/toolkit";
import { EMAIL_REGEX } from "@/utils/validations";

interface FormState {
  email: string;
  category: string | null;
  agreedToTerms: boolean;
  isValid?: boolean;
  errorFields: { emailErr: boolean; checkboxErr: boolean };
}

const initialState: FormState = {
  email: "",
  category: null,
  agreedToTerms: false,
  isValid: false,
  errorFields: { emailErr: false, checkboxErr: false },
};

const formSlice = createSlice({
  name: "newsletterForm",
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateCategory: (state, action) => {
      state.category = action.payload;
    },
    updateTerms: (state, action) => {
      state.agreedToTerms = action.payload;
    },
    submitForm: (state, action) => {
      state.isValid = EMAIL_REGEX.test(state.email) && state.agreedToTerms;
    },
    setErrorFields: (state, action) => {
      state.errorFields = action.payload;
    },
    resetForm: (state) => {
      state.email = "";
      state.category = null;
      state.agreedToTerms = false;
      state.isValid = false;
    },
  },
});

export const {
  updateEmail,
  updateCategory,
  updateTerms,
  resetForm,
  submitForm,
  setErrorFields,
} = formSlice.actions;

export default formSlice.reducer;
