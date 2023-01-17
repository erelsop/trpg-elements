// import type { Player } from '../player-model/Player';
// import type { Chapter } from '../chapter-model/Chapter';
// import type { Location } from '../location-model/Location';
import { supabase } from '$lib/supabaseClient';
import UUID from 'uuid-js';

/**
 * @class Campaign
 * @description Campaign model
 * @type {CampaignType}
 */
export class Campaign {
  userId: Promise<string>;
  data: JSON | null;
  campaignId: string;
  constructor() {
    this.userId = this.getUserId();
    // campaignId is a random string
    this.campaignId = UUID.create().toString();
    // @ts-ignore
    this.data = {};
  }

  async initCampaign() {
    // @ts-ignore
    this.data = [
      {
        id: this.campaignId,
        name: 'New Campaign',
      }
    ];
    const { error } = await supabase
      .from('campaigns')
      .insert([
        {
          id: this.campaignId,
          data: this.data,
          user_id: await this.userId,
        },
      ]);
    if (error) {
      console.log(error);
    } else {
      console.log('Campaign created');
    }
  }

  async getUserId() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    // @ts-ignore
    const { user } = session;
    return user.id;
  }
}
