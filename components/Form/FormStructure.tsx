import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

import FormField from "./FormField";
import { FormWrapper, FormSubmitButton } from "./FormStyle";
import { useDispatch, useSelector } from "react-redux";
import { resetForm, submitForm, setErrorFields } from "@/redux/formSlice";
import { showAlert, hideAlert } from "@/redux/alertSlice";
import { EMAIL_REGEX } from "@/utils/validations";
import { RootState } from "@/redux/store";

import { GET_FILMS } from "@/queries";
import Loading from "./Loading/index";

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
  const { loading, error, data } = useQuery(GET_FILMS);
  const [films, setFilms] = React.useState([]);
  const form = useSelector((state: RootState) => state.newsLetter);
  const isValidForm = () => {
    return EMAIL_REGEX.test(form.email) && form.agreedToTerms;
  };

  useEffect(() => {
    if (data) {
      setFilms(
        data.allFilms.films.map((film: { title: string; label: string }) => ({
          value: film.title,
          label: film.title,
        }))
      );
    }
  }, [data]);

  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isValidForm()) {
      dispatch(submitForm());
      dispatch(showAlert("Form submitted successfully"));
      dispatch(resetForm());
      setTimeout(() => dispatch(hideAlert()), 5000);
    } else {
      dispatch(
        setErrorFields({
          emailErr: !EMAIL_REGEX.test(form.email),
          checkboxErr: !form.agreedToTerms,
        })
      );
      dispatch(showAlert("Error submitting form, please check fields"));
      setTimeout(() => dispatch(hideAlert()), 2500);
    }
  };

  return (
    <FormWrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          {formData.map((field) => (
            <FormField
              key={field.name}
              label={field.label}
              type={field.type}
              name={field.name}
              placeholder={field?.placeholder}
              options={field.name === "select" ? films : []}
              htmlFor={field.name}
            />
          ))}
          <FormSubmitButton onClick={handleFormSubmit} type="submit">
            Submit
          </FormSubmitButton>
        </>
      )}
      {error && <p>Error fetching films</p>}
    </FormWrapper>
  );
};

export default FormStructure;
