import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getHomePageData } from '../lib/api';
import { NextSeo } from 'next-seo';
import { imageBuilder } from '../lib/sanity';

import BlockContent from '@sanity/block-content-to-react';
import serializers from '../components/serializers';
import { Box, Flex, Image, Spacer } from '@chakra-ui/react';

export default function Index({ queryRes }) {
  const data = queryRes[0];

  return (
    <>
      <Layout>
        <NextSeo
          title={data.title}
          titleTemplate={`${data.title} | Josh Zappone`}
          description={data.description}
          // canonical={config.url ? (slug === "/" ? `${config.url}` : `${config.url}/${slug}`) : null}
          // openGraph={{
          //   images: { openGraphImages },
          // }}
          // noindex={disallowRobots}
        />
        <Intro title="Welcome" />
        <Container>
          <Flex flexDir="column" alignItems="center" maxW="1000px" mx="auto">
            <Image
              src={imageBuilder
                .image(data.image.asset)
                .auto('format')
                .width(300)
                .height(300)
                .url()}
              alt={data.image.alt}
              borderRadius="full"
              width="300px"
              height="300px"
              m="30px"
              mt="0"
              p="15px"
              filter="drop-shadow(10px 4px 4px #d964176c) drop-shadow(-11px -2px 4px #6B46C16c)"
              _hover={{
                filter:
                  'drop-shadow(10px 4px 4px #6B46C16c) drop-shadow(-11px -2px 4px #d964176c)',
              }}
            />
            <Box width="100%" maxW="700px">
              <BlockContent blocks={data.introText} serializers={serializers} />
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const queryRes = await getHomePageData(preview);
  return {
    props: { queryRes, preview },
  };
}
