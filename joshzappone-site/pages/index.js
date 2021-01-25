import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <h2 className="text-2xl">The home page</h2>
        </Container>
      </Layout>
    </>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview);
//   return {
//     props: { allPosts, preview },
//   };
// }
