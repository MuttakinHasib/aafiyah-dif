import {
  CreateUserInput,
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRegisterMutation,
} from '@aafiyah/graphql';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import useLocalStorage from 'use-local-storage';

export const useAuth = () => {
  const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false);
  const { mutateAsync: registerMutation } = useRegisterMutation();
  const { mutateAsync: loginMutation } = useLoginMutation();
  const { mutateAsync: logoutMutation } = useLogoutMutation();

  const queryClient = useQueryClient();
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserInput>({ mode: 'all' });

  const signup = handleSubmit(async (data) => {
    try {
      toast.promise(registerMutation({ createUserInput: data }), {
        loading: 'Registering...',
        success: ({ createUser }) => <b>{createUser}</b>,
        error: (data) => {
          return <b>{data.message}</b>;
        },
      });
    } catch (error) {
      console.error(error);
    }
  });

  const login = handleSubmit(async (data) => {
    try {
      toast.promise(loginMutation({ loginInput: data }), {
        loading: 'Logging in...',
        success: ({ login: { message } }) => {
          setLoggedIn(true);
          queryClient.invalidateQueries(useMeQuery.getKey());
          push('/account');
          return <b>{message}</b>;
        },
        error: 'Failed to Login!',
      });
    } catch (error) {
      console.error(error);
    }
  });

  const logout = async () => {
    try {
      toast.promise(logoutMutation({}), {
        loading: 'Logging out...',
        success: ({ logout: { message } }) => {
          push('/');
          queryClient.resetQueries(useMeQuery.getKey());
          return <b>{message}</b>;
        },
        error: 'Failed to Logout!',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { register, signup, login, errors, logout, loggedIn, setLoggedIn };
};
