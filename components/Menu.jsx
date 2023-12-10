import React from "react";

const menuItems = [
	{
		title_jp: "ホーム",
		url: "/"
	},
	{
		title_jp: "ランキング",
		url: "/ranking"
	},
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
					<nav className="menu-items">
						<li>
							<a href={item.url}>{item.title_jp}</a>
						</li>
					</nav>
				);
			})}
		</section>
	);
};

export default Menu;
