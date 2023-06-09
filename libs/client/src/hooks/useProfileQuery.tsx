import { useMeQuery } from '@aafiyah/graphql';
import { useAuth } from './useAuth';

export const useProfileQuery = () => {
  const { loggedIn } = useAuth();
  return useMeQuery({}, { enabled: loggedIn });
};
