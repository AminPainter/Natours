import React from 'react';
import { useQuery } from 'react-query';

import SiteSeo from 'components/seo';
import {
  TourIntro,
  Briefing,
  Gallery,
  TourMap,
  Reviews,
  BookNow,
} from 'components/tour-page';
import { queryKeys } from 'utils/app-constants';
import { getTourBySlug } from 'utils/query-functions';

const TourDetailsPage = ({ params: { slug } }) => {
  const { data: tour, isLoading } = useQuery(
    [queryKeys.tourBySlug, slug],
    getTourBySlug
  );

  if (isLoading) return <>Loading</>;

  return (
    <>
      <TourIntro tour={tour} />
      <Briefing tour={tour} />
      <Gallery images={tour.images} />
      <TourMap />
      <Reviews reviews={tour.reviews} />
      <BookNow duration={tour.duration} images={tour.images} />
    </>
  );
};

export default TourDetailsPage;

export const Head = ({ params: { slug } }) => <SiteSeo title={slug} />;
