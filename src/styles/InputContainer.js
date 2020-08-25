import styled, { css } from 'styled-components'

const Input = styled.input`
${({ theme }) => css`
background-color: ${theme.colors.white};
border: solid 1px ${theme.colors.black};
height:50px;
width:50px;
font-size: 20px;
display: flex;
font-weight: bold;
height: auto;
transition: ${theme.transition};
user-select: no
`}
`
export default Input;