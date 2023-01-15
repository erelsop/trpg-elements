import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';

export const ssr = false;
export const prerender = true;
export const csr = true;
export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);
  return { session };
};
