import Container from './container';
import { EXAMPLE_PATH } from '../lib/constants';
import { Box, Heading } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      bgGradient="linear(to-l, #7928CA6c, #FF00806c)"
      as="footer"
      mt="4rem"
      pt="2rem"
      pb="1.5rem"
    >
      <Container>
        <Box textAlign="center">
          <Heading as="h4" size="sm">
            Made with&nbsp;
            <span role="img" aria-label="pizza">
              🍕
            </span>
            &nbsp; in Seattle.
          </Heading>
          <div>
            <p>
              <span role="img" aria-label="email">
                📧
              </span>
              &nbsp;&nbsp;
              <a className="external-a" href="mailto:contact@joshzappone.tech">
                contact@joshzappone.tech
              </a>
            </p>
          </div>
          <div>
            <p>Copyright © 2020</p>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
