import React from "react";

const menuItems = [
	{
		title_jp: "ホーム",
		url: "/"
	},
	// {
	// 	title_jp: "ランキング",
	// 	url: "/ranking"
	// },
	{
		title_jp: "ワイナリー一覧",
		url: "/wineries"
	},
	{
		title_jp: "スタッフブログ",
		url: "/blog"
	}
];

const Menu = () => {
	return (
		<section className="menu-container">
			{menuItems.map((item) => {
				return (
					<nav>
						<ul className="flex space-x-8 lg:space-x-20">
						<li className="list-none mx-2">
							<a className="text-sm md:text-base md:font-bold hover:text-red-800" href={item.url}>{item.title_jp}</a>
						</li>
						</ul>
					</nav>
				);
			})}
		</section>
	);
};

export default Menu;
