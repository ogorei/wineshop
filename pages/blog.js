import React, { useState } from "react";
import { client, urlFor } from "../lib/client";
import Link from "next/link";

const Blog = ({ posts }) => {
	return (
		<div>
			{posts.map(post => {
				return (
					<Link href={`/post/${post.slug.current}`}>
						<div className="flex flex-col md:flex-row m-6 border border-b-8 border-b-orange-800">
								<img className="w-full md:w-1/3" src={urlFor(post.image[0])} />
							<div className="flex flex-col place-content-center w-full md:w-2/3 p-4">
								<h1 className="font-bold text-red-800">
									{post.title}
								</h1>
								<p className="text-sm">
									{post.overview}
								</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export const getServerSideProps = async () => {
	const query = '*[_type == "post"]';
	const posts = await client.fetch(query);

	return {
		props: { posts }
	};
};

export default Blog;
