import axios from 'services/api';

export const getPopularTours = async () => {
  const {
    data: { data },
  } = await axios.get('/tours/popular');
  return data;
};

export const getAllTours = async () => {
  const {
    data: { data },
  } = await axios.get('/tours');
  return data;
};

export const getTourBySlug = async ({ queryKey }) => {
  const [, slug] = queryKey;

  const {
    data: { data },
  } = await axios.get(`/tours?slug=${slug}`);

  return data?.[0];
};

export const getMe = async () => {
  const {
    data: { data },
  } = await axios.get('/users/me');

  return data;
};

export const bookTour = async tourId => {
  const {
    data: { data },
  } = await axios.get(`/bookings/book-tour/${tourId}`);

  return data;
};
