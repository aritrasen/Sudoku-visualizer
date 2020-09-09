import styled, { css } from "styled-components";

const DummyButton = styled.button`
  ${({ theme }) => css`
    align-items: center;
    background-color: gray;
    border: 2px solid ${theme.colors.black};
    border-radius: 4px;
    color: ${theme.colors.white};
    display: flex;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    margin: 4px 2px;
    min-height: 40px;
    max-width: 50%;
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
export default DummyButton;
