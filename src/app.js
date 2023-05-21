import { createClient, OAuthStrategy } from '@wix/api-client';
import { items } from '@wix/data';

const wixClient = createClient({
  modules: {items},
  auth: OAuthStrategy({clientId: 'ba06617b-5a55-4353-8c00-8cb65f4e4aa3'})
});

async function queryDataItems() {
  const { items } = await wixClient.items.queryDataItems().find();
  console.log(items);
}

queryDataItems();