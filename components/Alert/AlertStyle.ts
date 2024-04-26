import styled from "styled-components";

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10;
  background-color: ${({ theme }) => theme.colors.alert};
  position: absolute;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
`;
