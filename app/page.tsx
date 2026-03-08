import { createClient } from "contentful";
import HomeClient from "./HomeClient";

async function getStoreData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const data = await client.getEntries();

  const store = data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "store"
  );

  return store;
}

export default async function Home() {
  const store = await getStoreData();

  return <HomeClient storeUrl={store[0].fields.url as string} />;
}
