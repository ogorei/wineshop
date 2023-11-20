import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const menuItems = [
	{
		title_jp: "ランキング",
		title_en: "Ranking"
	},
	{
		title_jp: "ワイナリー一覧",
		title_en: "Wineries"
	},
	{
		title_jp: "スタッフブログ",
		title_en: "Blog"
	}
];

const Menu = () => {
	return (
		<div className="menu-container">
			{menuItems.map((item) => {
				return (
					<div className="menu-item">
						<Link href="/">
							<div>
								<p className="menu-title">{item.title_en}</p>
								<p>{item.title_jp}</p>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Menu;
