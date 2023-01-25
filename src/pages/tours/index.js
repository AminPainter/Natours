import React from 'react';
import { useQuery } from 'react-query';

import { Section, Grid } from 'ui';
import SiteSeo from 'components/seo';
import Tour from 'components/tour';
import TourCardSkeleton from 'components/loaders/tour-card';
import { queryKeys } from 'utils/app-constants';
import { getAllTours } from 'utils/query-functions';

const ToursPage = () => {
  const { data: tours, isLoading } = useQuery(queryKeys.allTours, getAllTours);

  return (
    <Section py={10}>
      <Grid columns={3}>
        {isLoading ? (
          <>
            <TourCardSkeleton />
            <TourCardSkeleton />
            <TourCardSkeleton />
          </>
        ) : (
          tours.map((tour, i) => <Tour key={tour.id} tour={tour} />)
        )}
      </Grid>
    </Section>
  );
};

export default ToursPage;

export const Head = () => <SiteSeo title='All Tours' />;
