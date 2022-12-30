import testImg1 from 'images/nat-5.jpg';
import testImg2 from 'images/nat-6.jpg';
import testImg3 from 'images/nat-7.jpg';

export const tours = [
  {
    title: 'The Sea Explorer',
    slug: 'the-sea-explorer',
    coverImage: testImg1,
    duration: 7,
    startLocation: 'Las Vegas, USA',
    startDates: ['August 2023'],
    difficulty: 'medium',
    maxGroupSize: 12,
    ratingsAverage: 3.0,
    guides: [
      {
        name: 'Amin Painter',
        role: 'lead guide',
      },
      {
        name: 'John Smith',
        role: 'tour guide',
      },
    ],
  },
  {
    title: 'The Forest Hiker',
    slug: 'the-forest-hiker',
    coverImage: testImg2,
    duration: 4,
    startLocation: 'Las Vegas, USA',
    startDates: ['August 2023'],
    difficulty: 'easy',
    maxGroupSize: 15,
    ratingsAverage: 4.7,
    guides: [
      {
        name: 'Amin Painter',
        role: 'lead guide',
      },
      {
        name: 'John Smith',
        role: 'tour guide',
      },
    ],
  },
  {
    title: 'The Snow Adventurer',
    slug: 'the-snow-adventurer',
    coverImage: testImg3,
    duration: 9,
    startLocation: 'Las Vegas, USA',
    startDates: ['August 2023'],
    difficulty: 'hard',
    maxGroupSize: 5,
    ratingsAverage: 4.2,
    guides: [
      {
        name: 'Amin Painter',
        role: 'lead guide',
      },
      {
        name: 'John Smith',
        role: 'tour guide',
      },
    ],
  },
];
