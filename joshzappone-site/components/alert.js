import Container from './container';
// import cn from 'classnames'
import { Box, Link } from '@chakra-ui/react';

export default function Alert({ preview }) {
  return (
    <div
    // example usage of conditional classnames using classnames package
    // className={cn('border-b', {
    //   'bg-accent-7 border-accent-7 text-white': preview,
    //   'bg-accent-1 border-accent-2': !preview,
    // })}
    >
      <Box bgColor="lightgray" py="1px" textAlign="center">
        <Container>
          <Box fontSize=".8rem">
            {preview ? (
              <Box>
                This page is a preview. <a href="/api/exit-preview">Click here</a> to
                exit preview mode.
              </Box>
            ) : (
              <Box>
                Created with&nbsp;
                <Link
                  isExternal
                  href="https://nextjs.org/"
                  rel="noopener noreferrer"
                >
                  Nextjs
                </Link>
                &nbsp;and&nbsp;
                <Link
                  isExternal
                  href="https://www.sanity.io/"
                  rel="noopener noreferrer"
                >
                  Sanity
                </Link>
                . Deployed on&nbsp;
                <Link href="https://vercel.com" rel="noopener noreferrer">
                  Vercel
                </Link>
                .
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
}
