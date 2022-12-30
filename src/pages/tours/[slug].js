import React from 'react';

import SiteSeo from 'components/seo';
import { tours } from 'dev-data/data';
import { TourIntro, Briefing, Gallery } from 'components/tour-page';

const TourDetailsPage = ({ params: { slug } }) => {
  const tour = tours.find(tour => tour.slug === slug);

  return (
    <>
      <TourIntro tour={tour} />
      <Briefing tour={tour} />
      <Gallery tour={tour} />
    </>
  );
};

export default TourDetailsPage;

export const Head = ({ params: { slug } }) => <SiteSeo title={slug} />;
