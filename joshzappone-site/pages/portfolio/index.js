import Container from '../../components/container';
import Intro from '../../components/intro';
import Layout from '../../components/layout';
import ProjectTile from '../../components/projectTile';
import { getAllPortfolioData } from '../../lib/api';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

export default function Index({ allProjects, preview }) {
  const data = allProjects[0];
  console.log(data);

  const projectTiles = data.projects.map((p, idx) => {
    return (
      <ProjectTile
        key={idx}
        name={p.projectName}
        description={p.projectDescription}
        projectStack={p.projectStack}
        imageUrl={p.imageUrl}
        repoLink={p.repoLink || null}
        deployLink={p.deployLink || null}
      />
    );
  });

  return (
    <>
      <Layout preview={preview}>
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

        <Intro title="Projects" />
        <Container>
          <Heading as="h4" size="md" textAlign="center">
            {data.description}
          </Heading>
          <SimpleGrid
            mx="auto"
            py="2rem"
            maxW="1000px"
            columns={[1, 2, 3]}
            spacing="30px"
          >
            {projectTiles}
          </SimpleGrid>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allProjects = await getAllPortfolioData(preview);
  return {
    props: { allProjects, preview },
    revalidate: 100,
  };
}
