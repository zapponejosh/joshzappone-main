import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';
import { Box } from '@chakra-ui/layout';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Box as="header">
        <Alert preview={preview} />
        <Header />
      </Box>
      <main>{children}</main>
      <Footer />
    </>
  );
}
