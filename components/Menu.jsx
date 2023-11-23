import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const menuItems = [
	{
		title_jp: "ランキング"
	},
	{
		title_jp: "ワイナリー一覧"
	},
	{
		title_jp: "スタッフブログ"
	}
];

const Menu = () => {
	return (
		<section className="menu-container">
			{menuItems.map((item) => {
				return (
					<nav className="menu-items">
						<li>
							<a href="">{item.title_jp}</a>
						</li>
					</nav>
				);
			})}
		</section>
	);
};

export default Menu;
