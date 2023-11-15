"use client"

import FancyLink from "./fancyLink";
import Container from "./container";
import { useState, useEffect } from "react";

export default function Header() {

	const openMenu = () => {
		const menu = document.getElementById("menu")
		if (menu) {
			menu.style.transform = "translateX(0)"
		}
	}

	useEffect(() => {
		const button = document.getElementById("openMenuButton")
		if (button) {
			button.addEventListener("click", openMenu)
		}
	}, []);

	return (
		<header className="" id="header">
			<Container>
				<div className="flex flex-wrap">
					<nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
						<button
							id={"openMenuButton"}
							className="fixed top-2 right-5 text-xxs bg-[#999999] bg-opacity-10 p-3 rounded-[5px] z-10"
						>
							Menu <span className="ml-12">+</span>
						</button>
					</nav>
				</div>
			</Container>
		</header>
	);
};
