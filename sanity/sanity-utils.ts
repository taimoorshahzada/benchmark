import { createClient, groq } from "next-sanity";

export async function getData() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-10-19",
    useCdn: true,
  });

  client.fetch(
		groq`*[_type == "homepage"]{
        text,
        description,
        mainImage,
        alt
    }`
	);
}
