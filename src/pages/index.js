import React from 'react';

import { Hero, Gallery, Features } from 'components/home-page';

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Features />
    </>
  );
};

export default IndexPage;

export const Head = () => (
  <title>Natours | Exciting Tours for Adventurous People</title>
);
