import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const ssr = false;
export const prerender = true;
export const csr = true;

/** @type {import('./$types').LayoutLoad} */
export const load: import('./$types').LayoutLoad = async ({
  url: { pathname },
}) => {
  return { pathname };
};
