import {
  CreateUserInput,
  useLoginMutation,
  useProfileQuery,
  useRegisterMutation,
} from '@aafiyah/graphql';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import getQueryClient from '../../utils/getQueryClient';

export const useAuth = () => {
  const { mutateAsync: registerMutation } = useRegisterMutation();
  const { mutateAsync: loginMutation } = useLoginMutation();

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
          getQueryClient().invalidateQueries(useProfileQuery.getKey());
          return <b>{message}</b>;
        },
        error: 'Failed to Login!',
      });
    } catch (error) {
      console.error(error);
    }
  });

  return { register, signup, login, errors };
};
