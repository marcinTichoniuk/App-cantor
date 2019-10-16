import { createGlobalStyle } from 'styled-components';

import { setColor, setFont } from '../../../helpers/styles/styles';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: ${setFont.main};
  background: ${setColor.subBlack};
  color: ${setColor.subWhite}
}
h1 {
  margin-bottom: 30px;
}
p {
  line-height: 145%;
}
ul {
  list-style: none;
}
`

export default GlobalStyles;