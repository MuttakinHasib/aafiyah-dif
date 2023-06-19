'use client';
import { pick } from 'lodash';
import moment from 'moment';
import {
  UserWithoutPassword,
  useMeQuery,
  useUpdateUserMutation,
} from '@aafiyah/graphql';
import { ChangeEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useProfileQuery } from './useProfileQuery';
import { uploadFile } from '../services';

export const useProfile = () => {
  const { data } = useProfileQuery();
  const queryClient = useQueryClient();
  const { mutateAsync } = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' });

  watch(['avatar']);

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
          queryClient.invalidateQueries(useMeQuery.getKey());
          return <b>{updateUser}</b>;
        },
        error: (data) => <b>{data.message}</b>,
      });
    } catch (error) {
      console.error(error);
    }
  });

  const uploadProfilePicture = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    try {
      toast.promise(uploadFile(formData), {
        loading: 'Uploading Profile Picture...',
        success: (data) => {
          mutateAsync(
            { updateUserInput: { avatar: data.secure_url } },
            {
              onSuccess: async () => {
                await queryClient.invalidateQueries(useMeQuery.getKey());
              },
            }
          );
          return <b>Profile picture updated</b>;
        },
        error: (data) => <b>{data.message}</b>,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { register, updateProfile, errors, getValues, uploadProfilePicture };
};
