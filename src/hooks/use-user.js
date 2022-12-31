import { useQuery } from 'react-query';
import { queryKeys } from 'utils/app-constants';
import { getMe } from 'utils/query-functions';

const useUser = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery(queryKeys.me, getMe, { retry: false });
  return { user, isLoading, error };
};

export default useUser;
