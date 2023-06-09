'use server';
import { headers } from 'next/headers';

export const useFetcher = <TData, TVariables>(
  query: string,
  options?: RequestInit
): ((variables?: TVariables) => Promise<TData>) => {
  const headersInstance = headers();

  return async (variables?: TVariables) => {
    const res = await fetch(process.env.NX_API_URL + '/graphql', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        cookie: headersInstance.get('cookie') || '',
      },
      ...options,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || 'Error…');
    }

    return json.data;
  };
};
