import React, { useState } from "react";
import Cart from "./Cart";

import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const NavbarwithHamburger = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-gray-800 p-4">
			<div className="flex justify-between items-center">
				<div className="text-white font-bold">
					<p>
						<span>ソフィア°</span>
						<p className="text-sm font-light">お酒のお取寄せ専門店</p>
					</p>
				</div>
				<div className="hidden md:flex">
					<ul className="flex space-x-4">
						<li>
							<a href="/" className="text-white hover:text-gray-300">
								ホーム
							</a>
						</li>
						<li>
							<a href="/wineries" className="text-white hover:text-gray-300">
								ワイナリー
							</a>
						</li>
						<li>
							<a href="/blog" className="text-white hover:text-gray-300">
								ブログ
							</a>
						</li>
						<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
							<AiOutlineShopping />
							<span className="cart-item-qty">
								{totalQuantities}
							</span>
						</button>
						{showCart && <Cart />}
					</ul>
					<div />
				</div>
				<div className="md:hidden">
					
						<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
							<AiOutlineShopping />
							<span className="cart-item-qty">
								{totalQuantities}
							</span>
						</button>
						{showCart && <Cart />}
            </div>
				
				</div>
		</nav>
	);
};

export default NavbarwithHamburger;
