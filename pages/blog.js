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
							<div className="w-full md:w-2/5">
								<img src={urlFor(post.image[0])} />
							</div>
							<div className="p-4">
								<h1 className="font-bold">
									{post.title}
								</h1>
								<p>
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
