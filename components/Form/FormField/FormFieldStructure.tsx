import React, { useId } from "react";
import { FormFieldProps } from "./FormFieldTypes";
import {
  FormFieldLabel,
  FormFieldInput,
  FormFieldSelect,
  FormFieldCheckbox,
  FormFieldWrapper,
} from "./FormFieldStyle";

import { useDispatch, useSelector } from "react-redux";
import { updateEmail, updateTerms, updateCategory } from "@/redux/formSlice";
import { RootState } from "@/redux/store";

const FormFieldStructure = (props: FormFieldProps) => {
  const { email, category, agreedToTerms, isValid, errorFields } = useSelector(
    (state: RootState) => state.newsLetter,
  );

  const RenderComponent = (type: FormFieldProps["type"]) => {
    const id = useId();
    const dispatch = useDispatch();
    if (type === "email")
      return (
        <>
          <FormFieldLabel htmlFor={id}>{props.label}</FormFieldLabel>
          <FormFieldInput
            {...props}
            value={email}
            id={id}
            className={(!isValid && errorFields.emailErr && "error") || ""}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
          />
        </>
      );

    if (type === "checkbox") {
      return (
        <FormFieldWrapper>
          <FormFieldCheckbox
            {...props}
            id={id}
            checked={agreedToTerms}
            role="checkbox"
            onChange={() => dispatch(updateTerms(!agreedToTerms))}
          />
          <FormFieldLabel
            className={(!isValid && errorFields.checkboxErr && "error") || ""}
            htmlFor={id}
          >
            {props.label}
          </FormFieldLabel>
        </FormFieldWrapper>
      );
    }

    return (
      <>
        <FormFieldLabel htmlFor={id}>{props.label}</FormFieldLabel>{" "}
        <FormFieldSelect
          {...props}
          id={id}
          onChange={(e) => dispatch(updateCategory(e.target.value))}
        >
          {props.options?.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </FormFieldSelect>
      </>
    );
  };

  return <>{RenderComponent(props.type)}</>;
};

export default FormFieldStructure;
