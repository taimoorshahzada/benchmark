import React from "react";

function SlideMenu() {
	return (
		<section className="w-full h-screen fixed top-0 left-0 grid grid-cols-2 z-50">
			<div className="bg-white bg-opacity-20 backdrop-blur-3xl"></div>
			<div className="bg-black"></div>
		</section>
	);
}

export default SlideMenu;
