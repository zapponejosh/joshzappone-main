import '../styles/index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({
  colors,
  textStyles: {
    nav: {
      // you can also use responsive styles
      fontSize: { base: '1rem', md: '1.8rem', lg: '2rem' },
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    logo: {
      fontSize: { base: '1.1rem', md: '1.8rem', lg: '2rem' },
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: { base: '1px', sm: '2px' },
      textTransform: 'lowercase',
    },
    content: {
      // you can also use responsive styles
      fontSize: '1.1rem',
      lineHeight: '140%',
      letterSpacing: '1px',
    },
    excerpt: {
      // you can also use responsive styles
      fontSize: '0.9rem',
      lineHeight: '120%',
      letterSpacing: '.8px',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
