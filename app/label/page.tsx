// @ts-nocheck
import { createClient } from "contentful";
import LabelClient from "./LabelClient";
import HeadInfo from "../../components/HeadInfo/HeadInfo.js";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const data = await client.getEntries();

  return {
    artists: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "label"
    ),
    store: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "store"
    ),
  };
}

export const revalidate = 1;

export default async function RecordLabel() {
  const { artists, store } = await getData();

  return (
    <>
      <HeadInfo />
      <LabelClient artists={artists as any} storeUrl={store[0].fields.url as string} />
    </>
  );
}
