import styled, { css } from "styled-components";

const Button = styled.button`
  ${({ theme, colorDisabled }) => css`
    align-items: center;
    background-color: ${
      colorDisabled ? colorDisabled.background : theme.colors.black
    };
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    color: ${colorDisabled ? colorDisabled.fontColor : theme.colors.white};
    cursor: ${colorDisabled ? "none" : "pointer"};
    display: flex;
    flex; 1;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    opacity: 0.8;
    padding: 0;
    transition: ${theme.transition};

    &:focus {
      border-color: ${theme.colors.blue};
      outline: none;
    }

    &:hover {
      opacity: 0.6;
    }
  `}
`;
export default Button;
