// @ts-nocheck
import { createClient } from "contentful";
import ContactClient from "./ContactClient";
import HeadInfo from "../../components/HeadInfo/HeadInfo.js";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const data = await client.getEntries();

  return {
    contact: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "contact"
    ),
    store: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "store"
    ),
  };
}

export const revalidate = 1;

export default async function Contact() {
  const { contact, store } = await getData();

  return (
    <>
      <HeadInfo />
      <ContactClient contact={contact[0]} storeUrl={store[0].fields.url as string} />
    </>
  );
}
