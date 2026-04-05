// @ts-nocheck
import { createClient } from "contentful";
import ConsultingClient from "./ConsultingClient";
import HeadInfo from "../../components/HeadInfo/HeadInfo.js";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const data = await client.getEntries();

  return {
    consulting: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "consulting"
    ),
    store: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "store"
    ),
  };
}

export const revalidate = 1;

export default async function Consulting() {
  const { consulting, store } = await getData();

  return (
    <>
      <HeadInfo />
      <ConsultingClient consulting={consulting[0]} storeUrl={store[0].fields.url as string} />
    </>
  );
}
