import styled from "styled-components";

export const FormFieldLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  &.error {
    color: red;
  }
`;

export const FormFieldInput = styled.input`
  widht: 100%;
  padding: 0.6rem;
  background-color: #dedede;
  border: none;

  &::placeholder {
    color: #c4c5c7;
  }
  &:focus {
    background-color: #a3aecc;
    outline: none;
  }
  &.error {
    border: 1px solid red;
  }
`;

export const FormFieldSelect = styled.select`
  widht: 100%;
  padding: 0.6rem;
  background-color: #dedede;
  border: none;

  &::placeholder {
    color: #c4c5c7;
  }
  &:focus {
    background-color: #a3aecc;
    outline: none;
  }
`;

export const FormFieldCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  margin-right: 0.5rem;
  padding: 0.6rem;
  background-color: #dedede;
  display: flex;

  &:checked {
    background-color: #a3aecc;
  }
  &.error {
    color: red;
  }
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;
