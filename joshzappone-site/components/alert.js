import Container from './container';
// import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants';
import { Alert as A, Box, AlertDescription } from '@chakra-ui/react';

export default function Alert({ preview }) {
  return (
    <div
    // example usage of conditional classnames using classnames package
    // className={cn('border-b', {
    //   'bg-accent-7 border-accent-7 text-white': preview,
    //   'bg-accent-1 border-accent-2': !preview,
    // })}
    >
      <Box bgColor="lightgray">
        <Container>
          <A status="info" variant="left-accent">
            {preview ? (
              <AlertDescription>
                This page is a preview. <a href="/api/exit-preview">Click here</a> to
                exit preview mode.
              </AlertDescription>
            ) : (
              <>
                The source code for this blog is{' '}
                <a
                  href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                >
                  available on GitHub
                </a>
                .
              </>
            )}
          </A>
        </Container>
      </Box>
    </div>
  );
}
