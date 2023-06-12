import { Button } from '@aafiyah/ui';
import React from 'react';

const Page = () => {
  return (
    <React.Fragment>
      <h2 className="text-xl pb-4 mb-5 border-b border-gray-100 capitalize text-gray-800 font-medium">
        Reset Your Password
      </h2>
      <form>
        <div className="max-w-md space-y-5">
          <div className="w-full">
            <label
              htmlFor="current-password"
              className="text-gray-600 mb-2 block"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
              placeholder="**************"
              required
              // {...register('email', { required: true })}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="text-gray-600 mb-2 block">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
              placeholder="**************"
              required
              // {...register('email', { required: true })}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="confirm-password"
              className="text-gray-600 mb-2 block"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-gray-500 placeholder-gray-400"
              placeholder="**************"
              required
              // {...register('email', { required: true })}
            />
          </div>
          <Button label="Reset" type="submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Page;
