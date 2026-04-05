// @ts-nocheck
import { createClient } from "contentful";
import AboutClient from "./AboutClient";
import HeadInfo from "../../components/HeadInfo/HeadInfo.js";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const data = await client.getEntries();

  return {
    about: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "about"
    ),
    goodSpaces: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "goodSpaces"
    ),
    store: data.items.filter(
      (item: any) => item.sys.contentType.sys.id === "store"
    ),
  };
}

export const revalidate = 1;

export default async function About() {
  const { about, goodSpaces, store } = await getData();

  return (
    <>
      <HeadInfo />
      <AboutClient about={about[0]} goodSpaces={goodSpaces} storeUrl={store[0].fields.url as string} />
    </>
  );
}
