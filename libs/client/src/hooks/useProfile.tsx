'use client';
import { pick } from 'lodash';
import moment from 'moment';
import {
  UserWithoutPassword,
  useProfileQuery,
  useUpdateUserMutation,
} from '@aafiyah/graphql';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';

export const useProfile = () => {
  const { data } = useProfileQuery();
  const queryClient = useQueryClient();
  const { mutateAsync } = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  useEffect(() => {
    if (data?.me) {
      reset({
        ...pick<UserWithoutPassword, keyof UserWithoutPassword>(data.me, [
          'name',
          'email',
          'avatar',
          'phone',
          'gender',
        ]),
        ...(data.me.dob
          ? { dob: moment(data.me.dob).format('YYYY-MM-DD') }
          : {}),
      });
    }
  }, [data?.me, reset]);

  const updateProfile = handleSubmit(async (data) => {
    try {
      toast.promise(mutateAsync({ updateUserInput: data }), {
        loading: 'Updating Profile...',
        success: ({ updateUser }) => {
          queryClient.invalidateQueries(useProfileQuery.getKey());
          return <b>{updateUser}</b>;
        },
        error: (data) => <b>{data.message}</b>,
      });
    } catch (error) {
      console.error(error);
    }
  });

  return { register, updateProfile, errors };
};
