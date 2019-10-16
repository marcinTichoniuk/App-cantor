import styled, { css } from 'styled-components';

export const Title = styled.h1`
width: 100%;
text-align: center;
font-size: 30px;
font-weight: normal;
letter-spacing: 1px;
${props => props.up && css`
text-transform: uppercase;
`}
`

export const SubTitle = styled.h2`
text-align: center;
font-size: 24px;
font-weight: normal;
letter-spacing: 1px;
margin-bottom: 25px;
${props => props.small && css`
font-size: 20px;
margin-bottom: 0;
`}
`