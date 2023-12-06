import { createClient, groq } from "next-sanity";


const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: "2023-10-19",
	useCdn: false,
});
export async function getHomepage() {
	return client.fetch(
		groq`*[_type == "homepage"]{
        text,
        description,
        mainImage,
        alt,
		
    }`
	);
}

export async function getTest() {
	return client.fetch(
		groq`*[type == "selected-projects"]{
			mainImageTitle,
			"mainProject": project->slug,
			"mainImage": image.asset->url,
			Image1Title,
			"firstProject": project->slug,
			"image1": image.asset->url,
			Image2Title,
			"secondProject": project->slug,
			"image2": image.asset->url
		}
		`
	);
}

export async function getProjects() {
	const selectedProjectsSections = await client.fetch(
		`*[_type == "selected-projects"]{..., mainImage{'imageUrl': asset->url}, image1{'imageUrl': asset->url}, image2{'imageUrl': asset->url}, slug{
			slug{current}
		  }}`
	);

	return {
		props: {
			selectedProjectsSections,
		},
		revalidate: 10,
	};
}

export async function getAllProjects() {
	const projects = await client.fetch(
		`*[_type == "project"]{..., landscape_hero{"imageUrl": asset->url}, portrait_hero{"imageUrl": asset->url}, images[]{'imageUrl': asset->url},slug{"slug":current}}`
	);

	return {
		props: {
			projects,
		},
		revalidate: 10,
	};
}



export async function getAllUpcomingProjects() {
	const upcomingProjects = await client.fetch(
		`*[_type == "upcoming_project"]{..., hero_image{"imageUrl": asset->url}, featured_image_1{"imageUrl": asset->url}, featured_image_2{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}, slug{"slug":current}}`
	);

	return {
		props: {
			upcomingProjects,
		},
		revalidate: 10,
	};
}

export async function getAllShowhomes() {
	const showhomes = await client.fetch(
		`*[_type == "showhome"]{..., landscape_hero{"imageUrl": asset->url}, portrait_hero{"imageUrl": asset->url}, images[]{'imageUrl': asset->url}}`
	);

	return {
		props: {
			showhomes,
		},
		revalidate: 10,
	};
}

export async function getAllProcesses() {
	const processes = await client.fetch(
		`*[_type == "process"]{..., hero_image{"imageUrl": asset->url}} | order(order asc)`
	);

	return {
		props: {
			processes,
		},
		revalidate: 10,
	};
}

export async function getAllWalkthroughs() {
	const walkthroughs = await client.fetch(`*[_type == "walkthrough"]`);

	return {
		props: {
			walkthroughs,
		},
		revalidate: 10,
	};
}

export async function getAboutPageInfo() {
	const [info] = await client.fetch(`*[_type == "about_info"]`);

	return {
		props: {
			info,
		},
		revalidate: 10,
	};
}

export async function getReviews() {
	return client.fetch(
		groq`*[_type == "reviews"] {
			"review": reviews[0].review,
			"reviewer": reviews0[].reviewer
		  }`
	);
}

export async function getStaff() {
	return client.fetch(
		groq`*[_type == "staff_member"]{
			..., 
			name, 
			role, 
			"image": image.asset->url
		  }`
	);
}