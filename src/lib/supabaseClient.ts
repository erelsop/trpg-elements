import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';
import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types';

export const supabase: TypedSupabaseClient = createClient(
  // @ts-ignore
  env.PUBLIC_SUPABASE_URL,
  env.PUBLIC_SUPABASE_ANON_KEY
);
