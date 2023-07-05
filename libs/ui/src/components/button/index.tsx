'use client';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: string;
  loading?: boolean;
};

export const Button = (props: Props) => {
  const { label, disabled, loading, type = 'button' } = props;
  return (
    <button
      className={`tracking-[1px] focus:outline-none uppercase font-medium rounded border border-primary px-5 py-2 space-x-2 bg-primary text-white hover:bg-opacity-80 transition ${
        disabled ? 'bg-opacity-50 cursor-not-allowed' : ''
      }`}
      {...{ disabled, type }}
      {...props}
    >
      {loading ? <ThreeDots color="#fff" height={20} width={30} /> : label}
    </button>
  );
};
