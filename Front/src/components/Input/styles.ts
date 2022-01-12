import styled from "styled-components/native";

export const InputElement = styled.TextInput<{ invalid?: boolean }>`
  justify-content: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-color: #ebebeb;
  height: 50px;
  width: 250px;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ invalid }) => (invalid ? "rgba(255, 0, 0, .7)" : "#9d9d9d")};
`;
