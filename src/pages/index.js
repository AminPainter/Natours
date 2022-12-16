import React from 'react';

import { Hero, Gallery, Features, Tours } from 'components/home-page';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Features />
      <Tours />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Natours | Exciting Tours for Adventurous People</title>
);
