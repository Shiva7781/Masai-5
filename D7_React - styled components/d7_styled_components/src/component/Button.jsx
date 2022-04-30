import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  padding-top: 8px;
  text-align: center;
  background: #143f6b;
  color: #f6f54d;
  cursor: pointer;
  margin: 5px;

  &:hover {
    box-shadow: #02f523 0 3px 8px;
  }
`;

export { Button };
