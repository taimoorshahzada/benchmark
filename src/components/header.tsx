import FancyLink from "./fancyLink";
import Container from "./container";
import { useState, useEffect } from "react";

export default function Header() {
	return (
		<header className="mb-4 md:mb-6 xl:mb-8">
			<Container>
				<div className="flex flex-wrap">
					<nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
						<button className="fixed top-2 right-5 text-xxs bg-[#999999] bg-opacity-10 p-3 rounded-[5px]">
							Menu <span className="ml-12">+</span>
						</button>
					</nav>
				</div>
			</Container>
		</header>
	);
};
