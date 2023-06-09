'use client';
import { useProfile } from '@aafiyah/client';
import { PencilIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Button } from '@aafiyah/ui';

const ProfileInformation = () => {
  const { register, updateProfile } = useProfile();
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <React.Fragment>
      <div className="flex items-center pb-4 mb-5 justify-between gap-1 flex-wrap border-b border-gray-100">
        <h2 className="text-xl capitalize text-gray-800 font-medium">
          Profile Information
        </h2>
        {isDisabled && (
          <button
            className="focus:outline-none flex items-center"
            onClick={() => setIsDisabled((prev) => !prev)}
          >
            <PencilIcon className="w-4 mr-2" />
            Edit
          </button>
        )}
      </div>
      <form onSubmit={updateProfile} className="space-y-5">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="name" className="text-gray-600 mb-2 block">
              Name
            </label>
            <input
              type="text"
              id="name"
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder="Enter full name"
              {...register('name', { required: true })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-gray-600 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              disabled
              className="block bg-gray-100 w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
              placeholder="example@mail.com"
              {...register('email', { required: true })}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="birthday" className="text-gray-600 mb-2 block">
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              // defaultValue={moment(user.birthday).format('YYYY-MM-DD') || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder="Enter birthday"
              {...register('dob', {
                required: true,
                setValueAs: (value) => {
                  return new Date(value).toISOString();
                },
              })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="gender" className="text-gray-600 mb-2 block">
              Gender
            </label>
            <select
              id="gender"
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('gender', { required: true })}
            >
              <option>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="w-full">
            <label htmlFor="phone" className="text-gray-600 mb-2 block">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              placeholder="Enter phone number"
              {...register('phone', { required: true })}
            />
          </div>
          {/* <div className="w-full">
            <label htmlFor="country" className="text-gray-600 mb-2 block">
              Country
            </label>
            <select
              required
              name="country"
              id="country"
              defaultValue={user?.address?.country || ''}
              disabled={isDisabled}
              className={`block w-full border border-gray-100 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400 ${
                isDisabled ? 'bg-gray-100' : ''
              }`}
              {...register('country', { required: true })}
            >
              <option>Select country</option>
              <option selected value="Bangladesh">
                Bangladesh
              </option>
            </select>
          </div> */}
        </div>
        {!isDisabled && (
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="focus:outline-none uppercase font-medium rounded border-2 border-bg-gray-200 px-5 py-2 space-x-2 text-primary hover:bg-opacity-80 transition "
              onClick={() => setIsDisabled((prev) => !prev)}
            >
              Cancel
            </button>
            <Button label="Save" type="submit" />
          </div>
        )}
      </form>
    </React.Fragment>
  );
};

export default ProfileInformation;
