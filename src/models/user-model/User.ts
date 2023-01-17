import { supabase } from '$lib/supabaseClient';

export class User {
  id: Promise<string>;
  campaigns: any;
  constructor() {
    this.id = this.getUserId();
    this.campaigns = this.getCampaigns();
  }

  getCampaigns = async () => {
    let id = await this.getUserId();
    const { data, error } = await supabase
      .from('campaigns')
      .select('data')
      .eq('user_id', id);

    if (error) {
      console.log(error);
    } else {
      return data;
    }
  };

  getUserId = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    // @ts-ignore
    const { user } = session;
    return user.id;
  };
}
