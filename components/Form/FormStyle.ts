import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 0.5rem;
  gap: 1rem;
  width: 400px;

  @media (max-width: 399px) {
    width: 350px;
  }
`;

export const FormSubmitButton = styled.button`
  padding: 0.6rem;
  background-color: #a8c0d0;
  border: none;
  border-radius: 0.3rem;
  margin-top: 1rem;
`;
