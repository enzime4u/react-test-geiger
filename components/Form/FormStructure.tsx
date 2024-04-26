import React from "react";
import FormField from "./FormField";
import { FormWrapper, FormSubmitButton } from "./FormStyle";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, submitForm, setErrorFields } from "@/redux/formSlice";
import { showAlert, hideAlert } from "@/redux/alertSlice";
import { EMAIL_REGEX } from "@/utils/validations";
import { RootState } from "@/redux/store";

const formData = [
  {
    type: "email",
    placeholder: "Add your email",
    name: "email",
    label: "Email",
  },
  {
    type: "select",
    label: "Please select a category",
    placeholder: "Choose",
    name: "select",
    options: [
      { value: "-", label: "Select an option" },
      { value: "Shoes", label: "Shoes" },
      { value: "Heels", label: "Heels" },
      { value: "Sandals", label: "Sandals" },
      { value: "Handbags", label: "Handbags" },
    ],
  },
  {
    type: "checkbox",
    name: "checkbox",
    checked: false,
    label: "Tick if you agree with terms and conditions",
  },
];

const FormStructure = () => {
  const dispatch = useDispatch();
  const form = useSelector((state: RootState) => state.newsLetter);
  const isValidForm = () => {
    return EMAIL_REGEX.test(form.email) && form.agreedToTerms;
  };

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(submitForm(form));
      dispatch(showAlert("Form submitted successfully"));
      dispatch(resetForm());
      setTimeout(() => dispatch(hideAlert()), 5000);
    } else {
      dispatch(
        setErrorFields({
          emailErr: !EMAIL_REGEX.test(form.email),
          checkboxErr: !form.agreedToTerms,
        }),
      );
      dispatch(showAlert("Error submitting form, please check fields"));
      setTimeout(() => dispatch(hideAlert()), 2500);
    }
  };

  return (
    <FormWrapper>
      {formData.map((field) => (
        <FormField
          key={field.name}
          label={field.label}
          type={field.type}
          name={field.name}
          placeholder={field?.placeholder}
          options={field?.options}
        />
      ))}
      <FormSubmitButton onClick={handleFormSubmit} type="submit">
        Submit
      </FormSubmitButton>
    </FormWrapper>
  );
};

export default FormStructure;
