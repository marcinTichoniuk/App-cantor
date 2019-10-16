import styled, { css } from 'styled-components';
import { media } from '../../../helpers/styles/styles';

export const Section = styled.section`
  padding: 40px 10px;
  width: 100%;
  ${props => props.result && css`
  padding: 20px 0;
  `}

  ${media.medium`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  `}

`
