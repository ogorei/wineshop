import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";

const WineryDetails = ({ post }) => {
	const { image, title, overview, description } = post;
	const [index, setIndex] = useState(0);

	return (
		<div>
			<div className="md:p-10 flex flex-col md:flex-row justify-center items-center">
				<img className="" src={urlFor(image && image[index])} />

				<div className="w-full md:w-3/5 p-6 md:pl-4 text-center">
					<h1 className="font-bold text-xl text-red-800">
						{title}
					</h1>
					<p className="mt-2 md:p-8 leading-relaxed">
						{overview}
					</p>
				</div>
			</div>
			<div className="px-5 md:px-10">
				<p>
					{description}
				</p>
			</div>
		</div>
	);
};

export const getStaticPaths = async () => {
	const query = `*[_type == "wineries"] {
    slug {
      current
    }
  }`;
	const posts = await client.fetch(query);

	const paths = posts.map(post => ({
		params: {
			slug: post.slug.current
		}
	}));

	return {
		paths,
		fallback: "blocking"
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "wineries" && slug.current == '${slug}'][0]`;
	const post = await client.fetch(query);
	console.log(post);

	return {
		props: { post }
	};
};

export default WineryDetails;
