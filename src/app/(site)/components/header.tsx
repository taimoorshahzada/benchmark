"use client";

import FancyLink from "./fancyLink";
import Container from "./container";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

export default function Header() {
	const openMenu = () => {
		const content = document.querySelector(".main-content") as HTMLDivElement;
		const menu = document.getElementById("menu");
		const glass = document.getElementById("glass");
		if (menu) {
			menu.classList.add("open");
			glass?.classList.remove("opacity-0");
			glass?.classList.remove("invisible");
			content.classList.add("fixed");
		}
	};

	useEffect(() => {
		const button = document.getElementById("openMenuButton");
		if (button) {
			button.addEventListener("click", openMenu);
		}
	}, []);

	return (
		<header className="" id="header">
			<Container>
				<div className="flex flex-wrap">
					<nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
						<button
							id={"openMenuButton"}
							className="w-[100px] md:w-[120px] fixed top-[10px] right-[10px] md:right-5 text-xxs bg-[#999999] bg-opacity-10 p-3 rounded-[5px] z-20 backdrop-blur-lg flex justify-between items-center"
						>
							Menu{" "}
							<span>
								<Plus size={15} />
							</span>
						</button>
					</nav>
				</div>
			</Container>
		</header>
	);
}
