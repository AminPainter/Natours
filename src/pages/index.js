import React from 'react';

import { Hero, Gallery, Features, Tours } from 'components/home-page';
import SiteSeo from 'components/seo';

const IndexPage = () => (
  <>
    <Hero />
    <Gallery />
    <Features />
    <Tours />
  </>
);

export default IndexPage;

export const Head = () => (
  <SiteSeo title='Exciting Tours for Adventurous People' />
);
