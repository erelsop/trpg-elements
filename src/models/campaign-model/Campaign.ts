// import type { Player } from '../player-model/Player';
// import type { Chapter } from '../chapter-model/Chapter';
// import type { Location } from '../location-model/Location';
import { supabase } from '$lib/supabaseClient';

/**
 * @class Campaign
 * @description Campaign model
 * @type {CampaignType}
 */
export class Campaign {
  name: string;
  data: JSON;
  constructor(name: string) {
    this.name = name;
    this.data = JSON.parse('');
  }

  async initCampaign() {
    const { error } = await supabase
      .from('campaigns')
      .insert([{ data: this.data }]);
    if (error) {
      console.log(error);
    } else {
      console.log('Campaign created');
    }
  }
}

export type CampaignType = {
  name: string;
  data: JSON;

  initCampaign: () => void;
};
