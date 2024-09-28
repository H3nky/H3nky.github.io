import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear; 
  }
   .secondaryColor {
      color: ${({theme}) => theme.secondaryColor}
  }
  
`;

export default GlobalStyles;
