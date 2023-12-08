import React from "react";
import Link from "next/link";

const Post = ({ image, title, slug }) => {
	return (
		<div>
			<h1 className="text-3xl font-bold underline">All posts</h1>
			<div className="flex flex-col md:flex-row justify-center items-center">
				<div className="p-2 w-1/5 ">
					<article>
						<h2>hello</h2>
					</article>
				</div>
				<div className="p-2 w-3/5">
					<Link href="/">
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, modi. Mollitia cum quia minima nesciunt blanditiis dolorem repellat nisi natus nostrum ab nihil tempora, libero, voluptates, nobis eaque aliquid porro?</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Post;
