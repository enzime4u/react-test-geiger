import React from "react";
import FormFieldStructure from "./FormFieldStructure";
import { FormFieldProps } from "./FormFieldTypes";

const FormField = (props:FormFieldProps) => {
  return <FormFieldStructure {...props} />;
};

export default FormField;
