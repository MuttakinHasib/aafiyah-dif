import { useLogoutMutation, useProfileQuery } from '@aafiyah/graphql';
import { useQueryClient } from '@tanstack/react-query';

import { toast } from 'react-hot-toast';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useLogoutMutation();
  const logout = async () => {
    try {
      toast.promise(mutateAsync({}), {
        loading: 'Logging out...',
        success: ({ logout: { message } }) => {
          queryClient.resetQueries(useProfileQuery.getKey());
          return <b>{message}</b>;
        },
        error: 'Failed to Logout!',
      });
    } catch (error) {
      console.error(error);
    }
  };
  return { logout };
};
